/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-wait-for-empty-callback */
import axios from "axios";
import { getByRole, render, screen, waitFor } from '@testing-library/react'
import ProductCard from '../components/ProductCard'

jest.mock('axios')

const axiosResponseMock = {
    data: {
        title: 'Bananinha',
        description: '2 Bananinha',
        price: 50,
        thumbnail: 'bananinha-image.jpg'
    }
}

describe('ProductCard', () => {
    beforeEach(() => {
        axios.mockReset()
    })

    test('Page Render', async () => {
        axios.get.mockResolvedValueOnce(axiosResponseMock)

        render(<ProductCard />)

        screen.debug()
    
        await waitFor(()=>{})

        screen.debug()
    })

    test('render loading message', async () => {
        axios.get.mockResolvedValueOnce(axiosResponseMock)

        render(<ProductCard />)
        screen.debug()
        const loading = screen.getByText('Loading...')
        const product = screen.queryByText('Bananinha')

        expect(loading).toBeInTheDocument()
        expect(product).not.toBeInTheDocument()
 
        await waitFor(()=>{})

        screen.debug()
    })
    test('render product data', async () => {
        axios.get.mockResolvedValueOnce(axiosResponseMock)

        render(<ProductCard />)

        screen.debug()

        await waitFor(() => {
            expect(screen.getByText('Bananinha')).toBeInTheDocument()
            expect(screen.getByText('2 Bananinha')).toBeInTheDocument()
            expect(screen.getByText('$50')).toBeInTheDocument()
            expect(screen.getByRole('img', { name: /Thumbnail for Bananinha/i }))
        })
    })
})