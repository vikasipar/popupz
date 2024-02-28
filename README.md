### React-Popupz

React-Popupz is a simple and customizable popup notification library for React applications. It provides an easy way to display success, error, warning, info, or default messages to users with customizable themes and message content.

#### Installation

To install React-Popupz, you can use npm:

```bash
npm install react-popupz
```

#### Usage

1. **Integration in App.jsx**

   Wrap your application component with the `PopzProvider` to enable the popup notifications. Your `App.jsx` should be structured as follows:

   ```jsx
   import React from 'react';
   import { PopzProvider } from 'react-popupz';
   import AppContent from './AppContent'; // Import your main application component

   const App = () => {
     return (
       <PopzProvider>
         <AppContent />
       </PopzProvider>
     );
   };

   export default App;
   ```

2. **Displaying Popup Notifications**

   To display popup notifications, use the `popz` function provided by the `usePopz` hook. The function accepts four parameters: `theme`, `type`, `message`, and `progressBar`.

   - `theme`: Specify the theme of the popup. It can be either `'dark'` or `'light'`.
   - `type`: Specify the type of message. Available options are `'success'`, `'error'`, `'warning'`, `'info'`, or `'default'`.
   - `message`: Provide a short informative message to display in the popup.
   - `progressBar`: Specify whether to display a progress bar along with the popup. Use `'true'` to show the progress bar and `'false'` to hide it.

   Example usage:

   ```jsx
   import React from 'react';
   import { usePopz } from 'react-popupz';

   const AppContent = () => {
     const { popz } = usePopz();

     const handleSubmit = () => {
       // your logic
       //syntax- popz(theme, type, message, progress-bar);
       popz('dark', 'success', 'Logged in Successfully!', 'true');
     };

     return (
       <div className='App'>
         <h1>My Test App</h1>
         <button
           className='p-2 bg-blue-700 text-white font-semibold rounded-lg my-5'
           onClick={handleSubmit}
         >
           Submit
         </button>
       </div>
     );
   };

   export default AppContent;
   ```

   In this example, clicking the submit button triggers the display of a success popup notification with a dark theme, displaying the message "Logged in Successfully!" and including a progress bar.
