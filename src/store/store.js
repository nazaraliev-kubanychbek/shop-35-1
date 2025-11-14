import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import {persist} from 'zustand/middleware';
import axios from 'axios';

export const categoryStore = create(devtools(immer((set) => {
    return {
        category: [],
        fetchCategory: () => {
            axios('https://fakestoreapi.com/products/categories')
            .then(({data})=> {
                set(state =>{
                    state.category = data
                })
            })
        }
    }
})));

export const cartStore = create(persist(devtools(immer((set) => {
    return {
        cartList: [],
        addCart: (product) => {
            set((state) => {
                const idx = state.cartList.findIndex(item => product.id === item.id);
                if(idx > -1){
                    state.cartList[idx].count++
                }else{
                    state.cartList = [
                        {
                            count: 1,
                            ...product
                        },
                        ...state.cartList
                    ]
                }
            })
        },
        decrementCart: (product) => {
            set((state) => {
                const idx = state.cartList.findIndex(item => product.id === item.id);
                state.cartList[idx].count--
            })

        },
        deleteCart:  (product) => {
            set((state) => {
                state.cartList = state.cartList.filter(item => {
                  return  item.id !== product.id
                }) 
            })

        }
    
    }
}))));