import axios from 'axios'
import { bulbamock } from './pokemock'
import Pokecard from '../components/Pokecard'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from "@testing-library/user-event";

jest.mock('axios')

const axiosResponseMock = {
    data: bulbamock,
}

const urlMock = 'mock-link'
const openModalMock = jest.fn()

describe('Pokecard', () => {
    beforeEach(()=>{
        axios.mockReset()
    })

    test('Card Render', async () => {
        axios.get.mockResolvedValueOnce(axiosResponseMock)

        render( <Pokecard url={urlMock} openModal={openModalMock} />)

        await waitFor(() => {})
    })

    test('Elements of the Card Render', async () => {
        axios.get.mockResolvedValueOnce(axiosResponseMock)

        render( <Pokecard url={urlMock} openModal={openModalMock} />)
        
        await waitFor(() => {         
        })

        expect(screen.getByText(bulbamock.name)).toBeInTheDocument()
        expect(screen.getByRole("img", {name: bulbamock.name})).toBeInTheDocument()
        expect(screen.getByText(bulbamock.types[0].type.name)).toBeInTheDocument()
        expect(screen.getByText(bulbamock.types[1].type.name)).toBeInTheDocument()
    })

    test('trigger the OpenModal function', async () => {
        axios.get.mockResolvedValueOnce(axiosResponseMock)
        const user = userEvent.setup()
        render( <Pokecard url={urlMock} openModal={openModalMock} />)
        await waitFor(() => {});

        const card = screen.getByRole("article")

        await user.click(card)

        expect(openModalMock).toBeCalled();
        
    } )
})