# Hypermart Checkout System

## Overview

This project implements a **real-time customer distribution system** for checkout machines in a hypermart. Customers are assigned dynamically to the checkout queue with the fewest total items, optimizing queue balancing and reducing wait times.

---

## Features

- Dynamic assignment of customers to checkout queues with the least total items.
- Real-time UI updates using vanilla JavaScript.
- Persistent queue state using `localStorage`, so the queues survive page reloads.
- Responsive and user-friendly interface built with HTML and CSS.
- Input validation to ensure valid number of items per customer.
- Supports multiple checkout machines with independent queues.

---

1. Clone the repository:
   ```bash
   git clone https://github.com/BishwashKumarSah/Assignment.git

2. Open `index.html` in a live server.
3. Enter the number of items for a customer and click **Checkout Items** or press **Enter**.
4. The customer will be assigned automatically to the checkout with the fewest total items.

---

## Technical Details

### State Management

- The application stores the checkout queues as arrays inside a JavaScript array.
- Each queue holds item counts for customers.
- State is saved in `localStorage` after every update to persist data across page reloads.

### Algorithm and Time Complexity

- **Algorithm:**
  - When assigning a customer, the system calculates the total items in each checkout queue.
  - It selects the queue with the minimum total items.
  - The new customer is assigned to that queue.

- **Time Complexity:**
  - For each customer assignment, the algorithm iterates over all checkout queues (`n` queues).
  - Within each queue, it sums the items for `m` customers.
  - Worst-case complexity is **O(n * m)**.
  - Since `n` (number of checkouts) and `m` (customers per queue) are small, this approach is efficient in practice.

---

## Assumptions

- The number of checkout machines is fixed (currently 3, but easily configurable).
- Customers are assigned one at a time.
- Input number of items must be a positive integer.
- The system is designed for modern browsers supporting ES6 and `localStorage`.

---

## Future Improvements

- Add options to remove or move customers between queues.
- Backend integration for persistent multi-user data.
- Implement testing and error handling for edge cases.
- Use modern frameworks (React) for improved scalability.

---

## Contact

For questions or feedback, please contact [Bishwash Kumar Sah](mailto:sahkumar.bishwash@gmail.com).
