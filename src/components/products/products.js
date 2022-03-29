const products = [
    {id:1, name: "Lampara Mini Cat", category:"velador led", price:799 , img: "https://i.postimg.cc/sgVzqc4S/lampara-cat2.jpg", stock:2, description:"yes"},
    {id:2, name: "Lampara Cat Yellow", category:"velador led", price: 899, img:"https://i.postimg.cc/gkhrmNhT/lampara-cat.jpg", stock:34, description:"yes"},
    {id:3, name: "Lampara Sal", category:"lamparas", price: 599, img :"https://i.postimg.cc/W4N4mVHB/lamapra-sal2.jpg" , stock:6, description:"yes"},
    {id:4, name: "Lampara Cat White", category:"velador led", price: 1699, img:"https://i.postimg.cc/VkL6n1T3/lampara-cat3.jpg", stock:20, description:"yes"},
    {id:5, name: "Lampara Cat Violet", category:"velador led", price: 1199, img: "https://i.postimg.cc/fLXTDbt0/lampara-cat6.jpg", stock:10, description:"yes"},
    {id:6, name: "Lampara Cat 3D", category:"velador led" , price: 999, img: "https://i.postimg.cc/Dy5f2HZ5/lampara-cat7.jpg", stock:11, description:"yes"},
    {id:7, name: "Lampara Sal m2", category: "lamparas", price: 799, img:"https://i.postimg.cc/DZqFRYHr/lampara-sal.jpg", stock:20, description:"yes"},
    {id:8, name: "Lampara Reno", categor: "velador led", price: 799, img: "https://i.postimg.cc/15RPYBHF/map.jpg", stock:22, description:"yes"},
    {id:9, name: "Guirnalda Nube", category: "guirnaldas", price: 499, img: "https://i.postimg.cc/FFpXcc4H/tira.jpg", stock:20, description:"yes"},
    {id:10, name: "Guirnalda Unicorn", category: "guirnaldas", price: 699, img: "https://i.postimg.cc/P5BghQm2/tira-leduni.jpg", stock:22, description:"yes"},
    {id:11, name: "Guirnalda Stars", category: "guirnaldas", price: 799, img: "https://i.postimg.cc/4dGjH42c/tira-ledstar.jpg", stock:20, description:"yes"},
    {id:12, name: "Guirnalda Stars m2", category: "guirnaldas", price: 999, img: "https://i.postimg.cc/mDSJYxK5/tirad-ledstar3.jpg", stock:16, description:"yes"},
    {id:13, name: "Guirnalda Yellow", category: "guirnaldas", price: 459, img: "https://i.postimg.cc/y8SGf3w9/tira-led2.jpg", stock:22, description:"yes"},
    {id:14, name: "Tira Led 5050", category: "iluminacion", price: 1999, img: "https://i.postimg.cc/NMQPfJL7/tira-led.jpg", stock:25, description:"yes"},
    {id:15, name: "Velador Cat", category: "iluminacion", price: 799, img:"https://i.postimg.cc/1XjWByBJ/lampara-cat4.jpg", stock:25, description:"yes"},
    {id:16, name: "Velador Bear", category: "iluminacion", price: 989, img:"https://i.postimg.cc/y6QrsTKc/lampara-cat5.jpg", stock:25, description:"yes"}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 2000)
    })
}