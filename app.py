from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


products = [
    {'id': 1, 'name': 'Kaos Polos', 'price': 10000},
    {'id': 2, 'name': 'Celana Jeans', 'price': 150000},
]

@app.route('/')
def home():
    return 'ecommers'

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/products', methods=['POST'])
def add_product():
    data = request.get_json()
    new_id = max(p['id'] for p in products) + 1 if products else 1
    new_product = {
        'id': new_id,
        'name': data['name'],
        'price': data['price']
    }
    products.append(new_product)
    return jsonify({'message': 'Produk berhasil ditambahkan!', 'data': new_product}), 201


@app.route('/products/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    data = request.get_json()
    for product in products:
        if product['id'] == product_id:
            product['name'] = data.get('name', product['name'])
            product['price'] = data.get('price', product['price'])
            return jsonify({'message': 'Produk berhasil diupdate!', 'data': product})
    return jsonify({'message': 'Produk tidak ditemukan!'}), 404

@app.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    for product in products:
        if product['id'] == product_id:
            products.remove(product)
            return jsonify({'message': 'Produk berhasil dihapus!'})
    return jsonify({'message': 'Produk tidak ditemukan!'}), 404


if __name__ == '__main__':
    app.run(debug=True)