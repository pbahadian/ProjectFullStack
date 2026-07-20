//aqui me comunico con mi base de datos en sql

const db = require("../../config/database");

module.exports = class Products {
    constructor (name, description, price, stock,category_id, image_url ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.category_id = category_id;
        this.image_url = image_url;
    }

    static getAll(){
        return db.execute("SELECT * FROM products");
    }

    static getById(id) {
        return db.execute (`SELECT * FROM products WHERE id = ${id}`);
    }

    static getByCategory(category_id) {
        return db.execute(`SELECT * FROM products WHERE category_id = ${this.category_id}`);
    }

    create() {
    return db.execute( `INSERT INTO products (name, description, price, stock, category_id, image_url) VALUES ('${this.name}', '${this.description}', '${this.price}', '${this.stock}', '${this.category_id}', '${this.image_url}')`,
      
    );
  }

    static delete(id) {
        return db.execute (`DELETE FROM products WHERE id = ${id} ` );
    }

    update(id) {
        return db.execute (`UPDATE products SET products.name = '${this.name}', products.description = '${this.description}', products.price = '${this.price}',products.stock = '${this.stock}',  products.category_id = '${this.category_id}', products.image_url = '${this.image_url}''`) ; 
    }
            
        };
