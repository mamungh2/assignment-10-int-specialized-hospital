import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    // get required variable and method from custom useAuth hook
    const { user, isLoading } = useAuth();

    // set spinner when page is loading
    if (isLoading) {
        return <div className="spinner-border mt-4 text-success" role="status"></div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName ? children :
                <Redirect to={{
                    pathname: "/login",
                    state: { from: location }
                }}>
                </Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;