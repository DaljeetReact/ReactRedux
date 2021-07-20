Base Project with redux Store  with simple counter app

with redux and react-redux 

to implement store there is Folder on Root
directory

<pre>
<code>
I have Feature directory in Fearture directory i files like this

Feature
├── ActionsObjects. ->this will contain all the action functions with action type from /actionType Folder
│   └── TestObj.ts
├── InitStates ->this will contain all inlital state for store<br/>
│   └── index.ts
├── RootReducer.js this will contain all reducer as combine reducer and export it
├── Stores.           -> this will contain the store configurtion<br/>
│   └── Counterstore.ts
├── actionTypes. -> All the Actions are store in this file only
│   └── Test.ts
└── reducers     -> this will contain all the single reducer with all logic to update the state
    └── TestReducer.ts
    
</code>
</pre>
