
export interface ProductType {
    id: number
    name: string
    short_desc: string
    image: string
    price: number
    stock: number
    buying_price: number
    category: {
        id: number
        name:string
    }

    
}