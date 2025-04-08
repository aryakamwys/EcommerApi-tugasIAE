🛒 Simple E-Commerce API & Frontend
Proyek ini adalah aplikasi sederhana e-commerce dengan backend menggunakan Flask (Python) dan frontend menggunakan HTML + Tailwind CSS + JavaScript. Aplikasi ini memungkinkan fitur CRUD (Create, Read, Update, Delete) untuk produk.

📦 Backend (Flask)
🔧 Cara Menjalankan app.py Secara Lokal
Pastikan Python sudah terinstall
Cek di terminal:

bash
Copy
Edit
python --version
Install virtual environment (opsional tapi disarankan)

bash
Copy
Edit
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
Install dependencies

bash
Copy
Edit
pip install flask flask-cors
Jalankan server

bash
Copy
Edit
python app.py
Server akan berjalan di http://127.0.0.1:5000

Endpoint yang tersedia:

GET /products → Menampilkan seluruh produk

POST /products → Menambahkan produk

PUT /products/<id> → Update data produk berdasarkan ID

DELETE /products/<id> → Menghapus produk berdasarkan ID

💻 Frontend (HTML + TailwindCSS + JS)
👁 Cara Melihat Tampilan Frontend
Buka folder frontend kamu di VSCode (atau editor lain).

Pastikan kamu punya file index.html dan sudah connect ke file JS untuk fetch data dari backend (localhost:5000/products).

Klik kanan pada index.html lalu pilih "Open with Live Server".

Tampilan web akan muncul di browser (biasanya di http://127.0.0.1:5500).

Pastikan backend (app.py) juga sedang running agar data produk bisa dimuat.
