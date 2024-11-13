import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [reactVersion, setReactVersion] = useState('18.0.0');
  const [hooksManagement, setHooksManagement] = useState('Hooks');
  const [stateManagement, setStateManagement] = useState('Redux');
  const [middleware, setMiddleware] = useState('Redux-Thunk');
  const [cssFramework, setCssFramework] = useState('Tailwind');
  const [loading, setLoading] = useState(false);
  const [downloadLink, setDownloadLink] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setDownloadLink('');

    // Sending data to backend to generate the project
    try {
      const response = await axios.post('http://localhost:5000/generate', {
        reactVersion,
        hooksManagement,
        stateManagement,
        middleware,
        cssFramework
      });

      // If project is successfully generated, show the download link
      setDownloadLink(response.data.downloadUrl);
    } catch (error) {
      console.error('Error generating project:', error);
    } finally {
      setLoading(false);
    }
  };

 // Determine if hooksManagement is None (to enable/disable state management and middleware)
 const isHooksNone = hooksManagement === 'None';
 const isStateManagementDisabled = !isHooksNone;
 const isMiddlewareDisabled = !isHooksNone;

 // If hooks are selected (useState or useEffect), set state and middleware to None and disable
 const handleHooksChange = (e) => {
   setHooksManagement(e.target.value);
   if (e.target.value !== 'None') {
     setStateManagement('None');
     setMiddleware('None');
   }
 };

 
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-8">
      <div className="bg-white shadow-lg rounded-lg w-96 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">React Project Generator</h1>
        
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-2">React Version</label>
            <select
              value={reactVersion}
              onChange={(e) => setReactVersion(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="18.0.0">React 18</option>
              <option value="17.0.2">React 17</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-2">Types of Hooks</label>
            <select
              value={hooksManagement}
              onChange={handleHooksChange}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="useState">useState</option>
              <option value="useEffect">useEffect</option>
              <option value="None">None</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-2">State Management</label>
            <select
              value={stateManagement}
              onChange={(e) => setStateManagement(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
              disabled={isStateManagementDisabled} // Disable if hooks are not None
            >
              <option value="Redux">Redux</option>
              <option value="ContextAPI">Context API</option>
              <option value="None">None</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-2">Middleware</label>
            <select
              value={middleware}
              onChange={(e) => setMiddleware(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
              disabled={isMiddlewareDisabled} // Disable if hooks are not None
            >
              <option value="Redux-Thunk">Redux-Thunk</option>
              <option value="Redux-Saga">Redux-Saga</option>
              <option value="None">None</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-2">CSS Framework</label>
            <select
              value={cssFramework}
              onChange={(e) => setCssFramework(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="Tailwind">Tailwind CSS</option>
              <option value="Bootstrap">Bootstrap</option>
              <option value="None">None</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full mt-4 py-2 rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold`}
          >
            {loading ? 'Generating...' : 'Generate Project'}
          </button>
        </form>

        {downloadLink && (
          <div className="mt-4 text-center">
            <p className="text-green-600">Project generated! <a href={downloadLink} download className="text-blue-600 underline">Download your React app</a></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
