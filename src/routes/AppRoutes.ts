import RouteEntry from "./RouteEntry";
import SecureApp from "../secure/SecureApp";
import LoginPanel from "../open/Login";
import AddTodo from "../secure/todo/AddTodo";

const AppRoutes: RouteEntry[] = [

    {
        path: '/app/add',
        component: AddTodo,
        exact: true,
        secureRoute: true
    },
    {
        path: '/app',
        component: SecureApp,
        exact: true,
        secureRoute: true
    },
    {
        path: "/login",
        component: LoginPanel,
        exact: true,
        secureRoute: false
    }
    
]

export default AppRoutes;