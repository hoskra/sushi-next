# SUSHI Textbooks

Created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Online on [netlify](https://sushi-textbook.netlify.app).

## Development server

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Folder structure

```
.
├── components                # named, atomic part of page 
├── constants                 # constants, placeholder data
├── node_modules                  
├── pages                     # accessible URL paths
│   ├── ...                              
│   ├── signin                              
│   │   └── index.js          # "/signin"
│   ├── textbooks              
│   │   └── [id].js           # "/texbooks/id" - textbook detail (with given ID)          
│   ├── user                
│   ├── _app.js               # wrapper arround every page
│   └── index.js              # "/" - root page (homepage)
├── public                   
├── redux                     # state management             
└── styles                     
   ├── ...                              
   ├── global.scss            # styles available for every page
   ├── variables.scss         # variables that can be imported
   └── Textbook.module.scss   # styles for named scope
```