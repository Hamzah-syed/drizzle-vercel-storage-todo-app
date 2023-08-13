require('dotenv').config // to load environment variables
import { Todo } from "@/lib/drizzle";

const getData = async () => {

    //  retrieving the url of deployed version
    const deployedURL = process.env.REACT_APP_URL

    // will use this variable to condtionally set absolute url path
    let isLocalHost: boolean = false

    // checking localhost using window object since this code will be rendered on server and window object dosent exist on server
    if (typeof window === undefined) {
        isLocalHost = true
    }

    // setting site URL using ternary operator
    const siteUrl = isLocalHost ? "http://localhost:3000" : deployedURL

    try {
        // attaching the api path to site URL
        const res = await fetch(`${siteUrl}/api/todo`, {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch the data")
        };
        const result = await res.json()
        return result
    } catch (err) {
        console.log(err)
    }
}

const TodoList = async () => {

    const res: { data: Todo[] } = await getData();


    return (

        <div className="max-h-[350px] overflow-auto mb-4 ">
            {
                res.data.map((item) => {
                    return (
                        <div className="bg-gray-100 py-4 px-4 flex items-center gap-x-3 shadow rounded-lg my-5">
                            {/* Circle */}
                            <div className="h-3 w-3 bg-secondary rounded-full"></div>
                            {/* Task Title */}
                            <p className="text-lg font-medium">{item.task}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default TodoList

