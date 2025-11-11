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

export const cartStore = create(persist(devtools(immer(set =>{
    return {
        cart:[],
    }
}))))