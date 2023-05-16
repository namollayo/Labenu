import { render, screen } from "@testing-library/react"
import CartCard from "../components/Cart/CartCard"
import userEvent from "@testing-library/user-event"

const productMock = {
    id: "1",
    title: "Bolsa",
    price: 99.90,
    quantity: 2,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}

const removeFromCartMock = jest.fn()

//Fazer os testes 
describe("test product card", ()=>{
    test("render the component", ()=>{
        render(<CartCard product={productMock} removeFromCart={removeFromCartMock}/>)
        
    })
    
    test("Should render img, title, price and remove button", ()=>{
        render(<CartCard product={productMock} removeFromCart={removeFromCartMock}/>)

        const image = screen.getByRole('img', { name: /bolsa/i })
        const title = screen.getByRole('heading', { name: /bolsa/i })
        const price = screen.getByText(/\$99\.90/i)
        const quantity = screen.getByText(/2/i)
        const buttonRemove = screen.getByRole('button', { name: /remove/i })

        expect(image).toBeInTheDocument()
        expect(title).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(quantity).toBeInTheDocument()
        expect(buttonRemove).toBeInTheDocument()
       

    })

    test("When the button is actived, it should remove the product from the cart", async ()=>{
        const user = userEvent.setup()

        render(<CartCard product={productMock} removeFromCart={removeFromCartMock}/>)

        const buttonRemove = screen.getByRole("button", { name: /remove/i } )

        await user.click(buttonRemove)

        //Checa se a função mockada foi chamada
        expect(removeFromCartMock).toBeCalled()
        expect(removeFromCartMock).toHaveBeenCalled()

        // Garantir que foi chamada apenas 1x
        expect(removeFromCartMock).toBeCalledTimes(1)

        // Garantir que foi passada como argumento o prodcut
        expect(removeFromCartMock).toBeCalledWith(productMock)
    })

})