const Product = require('../models/Products');

//create a new product
exports.createProduct = async (req, res) => {
    try {
        const { name, size, description, price, quantity, color } = req.body;


        // Validate required fields
        if ( !name || !size || !description || !price || !quantity) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }
        
        const product = new Product({ name, size, description, price, quantity, color });

        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(400).json({ message: 'Error creating product', error: error.message });
    }
};


//update a product
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, size, description, price, quantity, color } = req.body;

        const product = await Product.findByIdAndUpdate(id, {
            name,
            size,
            description,
            price,
            quantity,
            color
        }, { new: true });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(400).json({ message: 'Error updating product', error: error.message });
    }
};