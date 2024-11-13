// src/components/App/AppClass.js
import React, { Component } from 'react';
import axios from 'axios';

class AppClass extends Component {
  state = {
    reactVersion: '18.0.0',
    stateManagement: 'Redux',
    middleware: 'Redux-Thunk',
    cssFramework: 'Tailwind',
    loading: false,
    downloadLink: '',
  };

  handleSubmit = async () => {
    this.setState({ loading: true, downloadLink: '' });

    try {
      const response = await axios.post('http://localhost:5000/generate', {
        reactVersion: this.state.reactVersion,
        stateManagement: this.state.stateManagement,
        middleware: this.state.middleware,
        cssFramework: this.state.cssFramework,
      });

      this.setState({ downloadLink: response.data.downloadUrl });
    } catch (error) {
      console.error('Error generating project:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { reactVersion, stateManagement, middleware, cssFramework, loading, downloadLink } = this.state;

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-8">
        <div className="bg-white shadow-lg rounded-lg w-96 p-6">
          <h1 className="text-2xl font-bold text-center mb-6">React Project Generator</h1>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-2">React Version</label>
              <select
                value={reactVersion}
                onChange={(e) => this.setState({ reactVersion: e.target.value })}
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="18.0.0">React 18</option>
                <option value="17.0.2">React 17</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-2">State Management</label>
              <select
                value={stateManagement}
                onChange={(e) => this.setState({ stateManagement: e.target.value })}
                className="border border-gray-300 rounded-md p-2"
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
                onChange={(e) => this.setState({ middleware: e.target.value })}
                className="border border-gray-300 rounded-md p-2"
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
                onChange={(e) => this.setState({ cssFramework: e.target.value })}
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="Tailwind">Tailwind CSS</option>
                <option value="Bootstrap">Bootstrap</option>
                <option value="None">None</option>
              </select>
            </div>

            <button
              type="button"
              onClick={this.handleSubmit}
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
  }
}

export default AppClass;
