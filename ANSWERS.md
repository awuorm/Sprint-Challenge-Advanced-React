- [ ] Why would you use class component over function components (removing hooks from the question)?

        Class components provide us with a way of maintainging state  and lifecycle hooks that we can use to change the virtual DOM whenever their is any changes to the state within the component.functional components without hooks are just plain Javascript functions that are able to render elements.

- [ ] Name three lifecycle methods and their purposes.
        1. componentDidMount - This method is invoked immediately after the component has mounted, any API calls that are required and node initialization can be performed in this method.
        2. ComponentDidUpdate - This method is invoked when their is some change in the DOM, this method is useful for updating the DOM after some changes.
        3. ComponenetWillUnmount - This method is invoked after the component has been destroyed. It is useful for performing any needed cleanup.

- [ ] Wht is the purpose of a custom hook?

    A custom hook provides for a means to add powerful logic to a hook that can't be achived with normal hooks. It also allows for code to be kept DRY since the hooks can be reused in different components.

- [ ] Why is it important to test our apps?

    Testing apps is important as it allows for edge cases and bugs to be identified within the app before the app goes into production.