import RouteEntry from "../../routes/RouteEntry";
import AddTodo from "../todo/AddTodo";

const SecureRoutes: RouteEntry[] = [

    {
        path: '/app/add',
        component: AddTodo,
        exact: true,
        secureRoute: true
    }
];

export default SecureRoutes;