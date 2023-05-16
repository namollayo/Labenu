import { render, screen } from "@testing-library/react"
import ProductCard from "../components/ProductsList/ProductCard"
import userEvent from "@testing-library/user-event"

const productMock = {
    id: "1",
    title: "Bolsa",
    price: 99.90,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}

const addToCartMock = jest.fn()

//Fazer os testes 
describe("test product card", ()=>{
    test("render the component", ()=>{
        render(<ProductCard product={productMock} addToCart={addToCartMock}/>)
    })
    
    test("Should render img, title, price and purchase button", ()=>{
        render(<ProductCard product={productMock} addToCart={addToCartMock}/>)

        // screen.logTestingPlaygroundURL()
        const image = screen.getByRole('img', { name: /bolsa/i })
        const title = screen.getByRole('heading', { name: /bolsa/i })
        const price = screen.getByText(/\$99\.90/i)
        const buttonBuy = screen.getByRole('button', { name: /buy/i })

        expect(image).toBeInTheDocument()
        expect(title).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(buttonBuy).toBeInTheDocument()
       

    })

    test("When the button is actived, it should add the product into the cart", async ()=>{
        const user = userEvent.setup()

        render(<ProductCard product={productMock} addToCart={addToCartMock}/>)

        const buttonBuy = screen.getByRole("button", { name: /buy/i } )

        await user.click(buttonBuy)

        //Checa se a função mockada foi chamada
        expect(addToCartMock).toBeCalled()
        expect(addToCartMock).toHaveBeenCalled()

        // Garantir que foi chamada apenas 1x
        expect(addToCartMock).toBeCalledTimes(1)

        // Garantir que foi passada como argumento o prodcut
        expect(addToCartMock).toBeCalledWith(productMock)
    })

})