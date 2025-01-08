{"content": "export interface Product {\n  id: string;\n  name: string;\n  description: string;\n  price: number;\n  image: string;\n  category: string;\n  stock: number;\n  createdAt: Date;\n  updatedAt: Date;\n}\n\nexport interface CartItem extends Product {\n  quantity: number;\n}\n\nexport interface Order {\n  id: string;\n  userId: string;\n  items: CartItem[];\n  total: number;\n  status: 'pending' | 'processing' | 'completed' | 'cancelled';\n  createdAt: Date;\n  updatedAt: Date;\n}", "encoding": "base64"}