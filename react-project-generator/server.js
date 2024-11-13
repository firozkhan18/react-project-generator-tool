// server.js
const express = require('express');
const cors = require('cors');
const archiver = require('archiver');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const port = 5000;

// Use CORS middleware to allow requests from specific origin
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from frontend
}));

app.use(express.json());

app.post('/generate', async (req, res) => {
    const { reactVersion, stateManagement, middleware, cssFramework } = req.body;
  
    console.log('Received config:', req.body); // Log request data
  
    try {
      // Normalize stateManagement and middleware values to lowercase
      const normalizedStateManagement = (stateManagement || '').toLowerCase();
      const normalizedMiddleware = (middleware || '').toLowerCase();
  
      // Create a temporary folder for the generated project
      const projectFolder = path.join(__dirname, 'temp-project');
      await fs.ensureDir(projectFolder);
  
      // Generate the package.json and other files based on the config
      const packageJson = {
        name: 'generated-react-app',
        version: '1.0.0',
        dependencies: {
          react: `^${reactVersion}`,
          'react-dom': `^${reactVersion}`,
          ...(normalizedStateManagement === 'redux' && { redux: '^4.0.5', 'react-redux': '^7.2.6' }),
          ...(normalizedMiddleware === 'redux-thunk' && { 'redux-thunk': '^2.3.0' }),
          ...(normalizedMiddleware === 'redux-saga' && { 'redux-saga': '^1.1.3' }),
          ...(cssFramework === 'Tailwind' && { tailwindcss: '^2.1.2', autoprefixer: '^10.1.0' }),
          ...(cssFramework === 'Bootstrap' && { bootstrap: '^5.0.0-beta2' }),
          "react-scripts": reactVersion === '18' ? '^5.0.0' : '^4.0.3',  // Adjust for different React versions
        },
        scripts: {
          start: 'react-scripts start',
          build: 'react-scripts build',
          test: 'react-scripts test',
          eject: 'react-scripts eject',
        },
      };
  
      // Write package.json to the generated project folder
      await fs.writeJson(path.join(projectFolder, 'package.json'), packageJson);
  
      // Add other files (App.js, index.js, etc.) based on the configuration
      const srcFolder = path.join(projectFolder, 'src');
      await fs.ensureDir(srcFolder);
  
      // Default App.js and index.js for any case
      await fs.writeFile(path.join(srcFolder, 'App.js'), `
        import React from 'react';
        import './App.css';
  
        function App() {
          return (
            <div className="App">
              <h1>Generated React App</h1>
            </div>
          );
        }
  
        export default App;
      `);
  
      await fs.writeFile(path.join(srcFolder, 'index.js'), `
        import React from 'react';
        import ReactDOM from 'react-dom';
        import './index.css';
        import App from './App';
  
        ReactDOM.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>,
          document.getElementById('root')
        );
      `);
  
      // Check for state management and middleware type and generate files accordingly
      if (normalizedStateManagement === 'redux') {
        const reduxFolder = path.join(srcFolder, 'redux');
        await fs.ensureDir(reduxFolder);
  
        // Conditional generation based on middleware
        if (normalizedMiddleware === 'redux-saga') {
          await createReduxSagaFiles(reduxFolder);
        } else if (normalizedMiddleware === 'redux-thunk') {
          await createReduxThunkFiles(reduxFolder);
        } else if (normalizedMiddleware === 'none') {
          // Do nothing, as we don't need to create redux or middleware files
        } else {
          throw new Error("Invalid middleware for Redux");
        }
      } else if (normalizedStateManagement === 'none' && normalizedMiddleware === 'none') {
        // Default React app without Redux and middleware
        console.log("Creating default React app without Redux and middleware");
      } else {
        // Any other invalid combination of stateManagement and middleware
        throw new Error("Invalid combination of state management and middleware");
      }
  
      // Generate a zip file containing the project
      const zipPath = path.join(__dirname, 'project.zip');
      const output = fs.createWriteStream(zipPath);
      const archive = archiver('zip', { zlib: { level: 9 } });
  
      archive.pipe(output);
      archive.directory(projectFolder, false);
      archive.finalize();
  
      output.on('close', async () => {
        // Clean up temporary files after zipping is done
        await fs.remove(projectFolder);
        res.json({ downloadUrl: 'http://localhost:5000/download' });
      });
  
    } catch (error) {
      console.error('Error during project generation:', error);
      res.status(500).json({ error: 'Failed to generate project' });
    }
  });
  

   // Create hooks folder and add default hooks if stateManagement and middleware are 'none'
   if (typesOfHooks === 'hooks' && normalizedStateManagement === 'none' && normalizedMiddleware === 'none') {
    const hooksFolder = path.join(srcFolder, 'hooks');
    await fs.ensureDir(hooksFolder);

    // Add custom hooks

    // useState hook
    await fs.writeFile(path.join(hooksFolder, 'useState.js'), `
      import { useState } from 'react';

      function useCustomState(initialValue) {
        const [state, setState] = useState(initialValue);

        const setCustomState = (newState) => {
          setState(newState);
        };

        return [state, setCustomState];
      }

      export default useCustomState;
    `);

    // useEffect hook
    await fs.writeFile(path.join(hooksFolder, 'useEffect.js'), `
      import { useEffect } from 'react';

      function useCustomEffect(callback, dependencies = []) {
        useEffect(() => {
          callback();
        }, dependencies);
      }

      export default useCustomEffect;
    `);

    // useLocalStorage hook
    await fs.writeFile(path.join(hooksFolder, 'useLocalStorage.js'), `
      import { useState } from 'react';

      function useLocalStorage(key, initialValue) {
        const storedValue = localStorage.getItem(key);
        const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : initialValue);

        const setLocalStorage = (newValue) => {
          setValue(newValue);
          localStorage.setItem(key, JSON.stringify(newValue));
        };

        return [value, setLocalStorage];
      }

      export default useLocalStorage;
    `);

    // useFetch hook
    await fs.writeFile(path.join(hooksFolder, 'useFetch.js'), `
      import { useState, useEffect } from 'react';

      function useFetch(url) {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);

        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch(url);
              const result = await response.json();
              setData(result);
            } catch (err) {
              setError(err);
            }
          };

          fetchData();
        }, [url]);

        return { data, error };
      }

      export default useFetch;
    `);
  }

// Helper function for creating Redux-Saga files
async function createReduxSagaFiles(reduxFolder) {
  const actionsFolder = path.join(reduxFolder, 'actions');
  await fs.ensureDir(actionsFolder);
  await fs.writeFile(path.join(actionsFolder, 'userActions.js'), `
    export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
    export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
    export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
    export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
    export const fetchUserSuccess = (user) => ({ type: FETCH_USER_SUCCESS, payload: user });
    export const fetchUserFailure = (error) => ({ type: FETCH_USER_FAILURE, payload: error });
  `);

  const reducersFolder = path.join(reduxFolder, 'reducers');
  await fs.ensureDir(reducersFolder);
  await fs.writeFile(path.join(reducersFolder, 'userReducer.js'), `
    import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actions/userActions';
    const initialState = { loading: false, user: null, error: null };
    const userReducer = (state = initialState, action) => {
      switch (action.type) {
        case FETCH_USER_REQUEST:
          return { ...state, loading: true };
        case FETCH_USER_SUCCESS:
          return { ...state, loading: false, user: action.payload };
        case FETCH_USER_FAILURE:
          return { ...state, loading: false, error: action.payload };
        default:
          return state;
      }
    };
    export default userReducer;
  `);

  const sagasFolder = path.join(reduxFolder, 'sagas');
  await fs.ensureDir(sagasFolder);
  await fs.writeFile(path.join(sagasFolder, 'userSaga.js'), `
    import { call, put, takeEvery } from 'redux-saga/effects';
    import { FETCH_USER_REQUEST, fetchUserSuccess, fetchUserFailure } from '../actions/userActions';
    import axios from 'axios';
    function* fetchUser() {
      try {
        const response = yield call(axios.get, 'http://localhost:5000/api/users');
        yield put(fetchUserSuccess(response.data));
      } catch (error) {
        yield put(fetchUserFailure(error.message));
      }
    }

    function* watchFetchUser() {
      yield takeEvery(FETCH_USER_REQUEST, fetchUser);
    }

    export default watchFetchUser;
  `);

  await fs.writeFile(path.join(reduxFolder, 'store.js'), `
    import { createStore, applyMiddleware } from 'redux';
    import createSagaMiddleware from 'redux-saga';
    import rootReducer from './reducers';
    import rootSaga from './sagas';
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      rootReducer,
      applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);
    export default store;
  `);

  await fs.writeFile(path.join(reduxFolder, 'sagas/index.js'), `
    import { all } from 'redux-saga/effects';
    import userSaga from './userSaga';
    export default function* rootSaga() {
      yield all([userSaga()]);
    }
  `);
}

// Helper function for creating Redux-Thunk files
async function createReduxThunkFiles(reduxFolder) {
  const actionsFolder = path.join(reduxFolder, 'actions');
  await fs.ensureDir(actionsFolder);
  await fs.writeFile(path.join(actionsFolder, 'userActions.js'), `
    export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
    export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
    export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
    export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
    export const fetchUserSuccess = (user) => ({ type: FETCH_USER_SUCCESS, payload: user });
    export const fetchUserFailure = (error) => ({ type: FETCH_USER_FAILURE, payload: error });
  `);

  const reducersFolder = path.join(reduxFolder, 'reducers');
  await fs.ensureDir(reducersFolder);
  await fs.writeFile(path.join(reducersFolder, 'userReducer.js'), `
    import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actions/userActions';
    const initialState = { loading: false, user: null, error: null };
    const userReducer = (state = initialState, action) => {
      switch (action.type) {
        case FETCH_USER_REQUEST:
          return { ...state, loading: true };
        case FETCH_USER_SUCCESS:
          return { ...state, loading: false, user: action.payload };
        case FETCH_USER_FAILURE:
          return { ...state, loading: false, error: action.payload };
        default:
          return state;
      }
    };
    export default userReducer;
  `);

  const storeFile = path.join(reduxFolder, 'store.js');
  await fs.writeFile(storeFile, `
    import { createStore, applyMiddleware } from 'redux';
    import thunk from 'redux-thunk';
    import rootReducer from './reducers';
    const store = createStore(
      rootReducer,
      applyMiddleware(thunk)
    );
    export default store;
  `);
}

// Serve the generated zip file at /download
app.get('/download', (req, res) => {
  const zipPath = path.join(__dirname, 'project.zip');
  res.download(zipPath, 'generated-react-app.zip');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
