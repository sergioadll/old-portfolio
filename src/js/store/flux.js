const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			theme: "dark"
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeTheme: light => {
				let theme = "";
				light ? (theme = "light") : (theme = "dark");
				//console.log("store", theme);
				setStore({ theme: theme });
			}
		}
	};
};

export default getState;
