import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Modal from "../components/Modal"

const activeModalMock = {
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    id: 2,
    name: "ivysaur",
    types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
    weight: 130,
    height: 100,
  };

  const closeModalMock = jest.fn()

  describe("Modal tests", () => {
    test("Render the modal component", () => {
        render(<Modal activeModal={activeModalMock} closeModal={closeModalMock} />);
    })

    test("Should render Modal elements", () => {
        render(<Modal activeModal={activeModalMock} closeModal={closeModalMock} />)
        
        const url = screen.getByRole('img', { name: /ivysaur/i })
        const id = screen.getByRole('heading', { name: /2/i})
        const name = screen.getByText(/ivysaur/i)
        const type1 = screen.getByText(/grass/i)
        const type2 = screen.getByText(/poison/i)
        const weight = screen.getByText(/13\.0/i)
        const height = screen.getByText(/10\.0/i)
        const closeButton = screen.getByRole('button', { onClick: /closeModalMock/ })
        
        expect(url).toBeInTheDocument();
        expect(id).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(type1).toBeInTheDocument();
        expect(type2).toBeInTheDocument();
        expect(weight).toBeInTheDocument();
        expect(height).toBeInTheDocument();
        expect(closeButton).toBeInTheDocument();
    })
    
    test("User interation", async () => {
        const user = userEvent.setup()

        render(<Modal activeModal={activeModalMock} closeModal={closeModalMock} />)

        const closeButton = screen.getByRole('button', { onClick: /closeModalMock/ })

        await user.click(closeButton)

        expect(closeModalMock).toBeCalled()
        
    })
})