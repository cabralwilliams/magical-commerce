const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Associations
Category.hasMany(Product, {
    foreignKey: "category_id"
});

Product.belongsTo(Category, {
    foreignKey: "category_id"
});

ProductTag.belongsTo(Tag, {
    foreignKey: "tag_id"
});

ProductTag.belongsTo(Product, {
    foreignKey: "product_id"
});

Tag.hasMany(ProductTag, {
    foreignKey: "tag_id"
});

Product.hasMany(ProductTag, {
    foreignKey: "product_id"
});

Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: "product_id"
});

Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: "tag_id"
});

module.exports = { Category, Product, Tag, ProductTag };