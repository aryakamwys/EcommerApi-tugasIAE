const API_URL = 'http://127.0.0.1:5000/products';


document.addEventListener('DOMContentLoaded', () => {
  const addForm = document.getElementById('addForm');
  if (addForm) {
    addForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const price = parseInt(document.getElementById('price').value);

      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, price })
        });

        if (!res.ok) throw new Error('Gagal tambah produk');

        alert('Produk berhasil ditambahkan!');
        window.location.href = 'index.html';
      } catch (err) {
        alert('Error: ' + err.message);
      }
    });
  }

  fetchProducts();
});

async function fetchProducts() {
  const container = document.getElementById('product-list');
  if (!container) return;

  const res = await fetch(API_URL);
  const products = await res.json();

  container.innerHTML = '';
  products.forEach(product => {
    container.innerHTML += `
      <div class="bg-white text-black p-9 rounded shadow-lg">
        <h3 class="font-bold text-xl">${product.name}</h3>
        <p class="mb-2">Rp ${product.price}</p>
        <div class="flex gap-2">
          <button onclick="editProduct(${product.id}, '${product.name}', ${product.price})" class="bg-yellow-400 text-white px-3 py-1 rounded">Edit</button>
          <button onclick="deleteProduct(${product.id})" class="bg-red-500 text-white px-3 py-1 rounded">Hapus</button>
        </div>
      </div>
    `;
  });
}

async function deleteProduct(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  fetchProducts();
}

function editProduct(id, currentName, currentPrice) {
  const name = prompt("Edit nama:", currentName);
  const price = prompt("Edit harga:", currentPrice);
  if (name !== null && price !== null) {
    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price: parseInt(price) })
    }).then(fetchProducts);
  }
}
