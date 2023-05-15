import { render, screen } from "@testing-library/react"
import TodoList from "../components/TodoList"
import userEvent from "@testing-library/user-event"

describe("Test To Do List", () => {

    test("Should render the title", () => {
        render(<TodoList/>)

        const title = screen.getByText("To do List")

        expect(title).toBeInTheDocument()
    })

    test("should start empty", () => {
        render(<TodoList/>)

        const input = screen.getByPlaceholderText(/Enter a todo/i)
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue("")
    })

    test("should update the value whenever it's modified", async () => {
        const user = userEvent.setup()  

        render(<TodoList/>)

        const input = screen.getByPlaceholderText(/enter a todo/i)
        await user.type(input, "Estudar")
        expect(input).toHaveValue("Estudar")

    })

    test("Should render a new task after the input is updated and the enter key is pressed", async () => {
        const user = userEvent.setup()  

        render(<TodoList/>)

        const input = screen.getByPlaceholderText(/enter a todo/i)
        await user.type(input, "Estudar{enter}")
        const toDoItem = screen.getByText(/estudar/i)
        expect(toDoItem).toBeInTheDocument()
        expect(input).toHaveValue("")

    })
    test("Should change the status when Toggle Button is actived", async () => {
        const user = userEvent.setup()  

        render(<TodoList/>)

        const input = screen.getByPlaceholderText(/enter a todo/i)
        await user.type(input, "Comer{enter}")
        const toDoItem = screen.getByText(/comer/i)
        const toggleButton = screen.getByRole("button",{name: /toggle/i})

        await user.click(toggleButton)
        expect(toDoItem).toBeInTheDocument()
        expect(input).toHaveValue("")

        // screen.debug()
        // screen.logTestingPlaygroundURL()

        expect(toDoItem).toHaveStyle("text-decoration: line-through")

        await user.click(toggleButton)

        expect(toDoItem).toHaveStyle("text-decoration: none")
        

    })


})