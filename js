// Product Data
let cartCount = 2;
let selectedColor = "Midnight Black";

// Change main product image
function changeImage(src) {
    document.getElementById('mainImage').src = src;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Update quantity
function updateQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    let newValue = currentValue + change;
    
    if (newValue >= 1 && newValue <= 10) {
        quantityInput.value = newValue;
    }
}

// Color selection
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        // Remove active class from all options
        document.querySelectorAll('.color-option').forEach(opt => {
            opt.classList.remove('active');
        });
        
        // Add active class to clicked option
        this.classList.add('active');
        
        // Update selected color text
        selectedColor = this.getAttribute('data-color');
        document.querySelector('.selected-color').textContent = `Selected: ${selectedColor}`;
    });
});

// Tab switching
function openTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked tab button
    event.target.classList.add('active');
}

// Add to cart
function addToCart() {
    const quantity = document.getElementById('quantity').value;
    const productName = "Smart Watch Pro X";
    const color = selectedColor;
    const price = 299.99;
    
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    
    showToast(`${productName} (${color}) added to cart!`);
    
    // In a real application, you would send this data to your backend
    console.log({
        product: productName,
        color: color,
        quantity: quantity,
        price: price,
        total: price * quantity
    });
}

// Add to wishlist
function addToWishlist() {
    showToast("Product added to wishlist!");
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add click listeners to thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            changeImage(this.src);
        });
    });
    
    // Add click listeners to color options
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            selectedColor = color;
            document.querySelector('.selected-color').textContent = `Selected: ${color}`;
        });
    });
    
    // Add to cart buttons for related products
    document.querySelectorAll('.btn-small').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').textContent;
            showToast(`${productName} added to cart!`);
            cartCount++;
            document.querySelector('.cart-count').textContent = cartCount;
        });
    });
});