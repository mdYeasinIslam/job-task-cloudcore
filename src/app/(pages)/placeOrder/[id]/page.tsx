'use client'
// src/pages/PlaceOrder.tsx
import React, { useState } from 'react';
import axios from 'axios';

const PlaceOrder = () => {
    // State to hold form data
    const [productIds, setProductIds] = useState<string>('');
    const [quantities, setQuantities] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [courier, setCourier] = useState<string>('steadfast');
    const [address, setAddress] = useState<string>('');
    const [advance, setAdvance] = useState<number | null>(null);
    const [codAmount, setCodAmount] = useState<number>(0);
    const [discountAmount, setDiscountAmount] = useState<number | null>(null);
    const [deliveryCharge, setDeliveryCharge] = useState<number>(80);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const orderData = {
            product_ids: productIds,
            s_product_qty: quantities,
            c_phone: phone,
            c_name: name,
            courier: courier,
            address: address,
            advance: advance,
            cod_amount: codAmount.toString(),
            discount_amount: discountAmount,
            delivery_charge: deliveryCharge.toString(),
        };

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post(
                'https://admin.refabry.com/api/public/order/create',
                orderData
            );
            if (response.status === 200) {
                setSuccess(true);
                setProductIds('');
                setQuantities('');
                setPhone('');
                setName('');
                setAddress('');
            }
        } catch (error) {
            setError('Failed to place the order. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">Place Your Order</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {success && <div className="text-green-500 mb-4">Order placed successfully!</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Product IDs */}
                <div>
                    <label htmlFor="productIds" className="block text-gray-700 dark:text-white">Product IDs (comma separated)</label>
                    <input
                        id="productIds"
                        type="text"
                        value={productIds}
                        onChange={(e) => setProductIds(e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:bg-gray-700 dark:text-white rounded-lg"
                        required
                    />
                </div>

                {/* Quantities */}
                <div>
                    <label htmlFor="quantities" className="block text-gray-700 dark:text-white">Quantities (comma separated)</label>
                    <input
                        id="quantities"
                        type="text"
                        value={quantities}
                        onChange={(e) => setQuantities(e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:bg-gray-700 dark:text-white rounded-lg"
                        required
                    />
                </div>

                {/* Customer Name */}
                <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-white">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:bg-gray-700 dark:text-white rounded-lg"
                        required
                    />
                </div>

                {/* Customer Phone */}
                <div>
                    <label htmlFor="phone" className="block text-gray-700 dark:text-white">Phone Number</label>
                    <input
                        id="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:bg-gray-700 dark:text-white rounded-lg"
                        required
                    />
                </div>

                {/* Address */}
                <div>
                    <label htmlFor="address" className="block text-gray-700 dark:text-white">Address</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:bg-gray-700 dark:text-white rounded-lg"
                        required
                    />
                </div>

                {/* Courier */}
                <div>
                    <label htmlFor="courier" className="block text-gray-700 dark:text-white">Courier</label>
                    <input
                        id="courier"
                        type="text"
                        value={courier}
                        onChange={(e) => setCourier(e.target.value)}
                        className="w-full p-3 border border-gray-300 dark:bg-gray-700 dark:text-white rounded-lg"
                    />
                </div>

                {/* COD Amount */}
                <div>
                    <label htmlFor="codAmount" className="block text-gray-700 dark:text-white">COD Amount</label>
                    <input
                        id="codAmount"
                        type="number"
                        value={codAmount}
                        onChange={(e) => setCodAmount(Number(e.target.value))}
                        className="w-full p-3 border border-gray-300 dark:bg-gray-700 dark:text-white rounded-lg"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-red-500 to-black text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                        disabled={loading}
                    >
                        {loading ? 'Placing Order...' : 'Place Order'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PlaceOrder;
