- Add a new Store component to `App.js`

```jsx
function Store({ name }) {
return (
<h1 className="store-name"><span>{name}</span></h1>
);
}
```

- Include the component in your app:

```jsx
function App()  {
      return <div className="container">
             <Header />
             <Store name="Northern Store" />
             <Footer />
             </div>
}
```
