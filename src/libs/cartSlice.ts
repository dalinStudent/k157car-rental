import { CartItem } from '@/types/cart.type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type CartState = {
	items: CartItem[];
};

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartItem>) => {
			const item = action.payload;
			const existingItem = state.items.find(i => i.car.id === item.car.id);
			if (existingItem) {
				existingItem.quantity = item.quantity;
			} else {
				state.items.push({
					car: item.car,
					quantity: item.quantity,
				});
			}
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(item => item.car.id !== action.payload);
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
