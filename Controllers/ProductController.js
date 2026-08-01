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

//get product by id
exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product found', product });
    } catch (error) {
        res.status(400).json({ message: 'Error fetching product', error: error.message });
    }
};

//get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ message: 'Products fetched successfully', products });
    } catch (error) {
        res.status(400).json({ message: 'Error fetching products', error: error.message });
    }
};

//delete product by id
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        } 
        res.json({ message: 'Product deleted successfully', product });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting product', error: error.message });
    }
};
