## Popupz 🍿

Popupz is a simple and customizable popup notification library for React applications. It provides an easy way to display success, error, warning, info, or default messages to users with customizable themes and message content.

#### Installation

To install Popupz, you can use npm:

```bash
npm install popupz
```

#### Usage

1. **Integration in main.jsx**

   Wrap your App.jsx component with the `PopzProvider` to enable the pop-up notifications. Your `main.jsx` should be structured as follows:

   ```jsx
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import App from './App.jsx'
   import './index.css'
   import { PopzProvider } from 'popupz';
  
   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <PopzProvider>
         <App />
       </PopzProvider>
     </React.StrictMode>,
   )

   ```

2. **Displaying Popup Notifications**

   To display popup notifications, first import the **usePopz** hook in your component.

   ```jsx
     import { usePopz } from 'popupz/dist';
   ```

   Now use the `popz` function provided by the `usePopz` hook. The function accepts four parameters: `theme`, `type`, `message`, and `progressBar`.

```jsx
//syntax- popz(theme, type, message, progress-bar);
```

   - `theme`: Specify the theme of the popup. It can be either `'dark'` or `'light'`.
   - `type`: Specify the type of message. Available options are `'success'`, `'error'`, `'warning'`, `'info'`, or `'default'`.
   - `message`: Provide a short informative message to display in the popup.
   - `progressBar`: Specify whether to display a progress bar along with the popup. Use `'true'` to show the progress bar and `'false'` to hide it.

   Example usage:

   ```jsx
   import React from 'react';
   import { usePopz } from 'popupz/dist';

   const MyComponent = () => {
     const { popz } = usePopz();

     const handleSubmit = () => {
       // your logic
       popz('dark', 'success', 'Logged in Successfully!', 'true');
     };

     return (
       <div>
         <h1>My Component</h1>
         <button onClick={handleSubmit} >
           Submit
         </button>
       </div>
     );
   };

   export default MyComponent;
   ```

   In this example, clicking the submit button triggers the display of a success popup notification with a dark theme, displaying the message "Logged in Successfully!" and including a progress bar.

