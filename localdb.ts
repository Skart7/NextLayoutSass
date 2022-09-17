export const app_name = 'NextLayoutSass'

export interface Products {
    id: number;
    category: string;
    label: string;
    price: number;
    images: string[];
    ratingValue: number;
    ratingCount: number;
    inStock: boolean;
}

export const products:Products[] = [
    {
        id: 1,
        category: 'laptops',
        label: 'ASUS Vivobook Laptop, 17.3" HD+ (1600x900) Non-Touch Display, Intel Core i5 Quad-Core Processor, 20GB DDR4 RAM, 512GB PCIe NVMe M.2 SSD, Webcam, HDMI, USB Type-C, Wi-Fi 5, Windows 11 Home, Silver',
        price: 579,
        images: [
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/619V0a2VjtL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61YCbRnDlxL._AC_SL1500_.jpg'
        ],
        ratingValue: 4.7,
        ratingCount: 22,
        inStock: true
    },
    {
        id: 2,
        category: 'laptops',
        label: '2022 Newest HP 15 Laptop, 15.6" Full HD Display, AMD Ryzen 5 5500U Hexa-Core Processor, 16GB DDR4 RAM, 512GB PCIe SSD, Webcam, HDMI, Bluetooth, Type-C, Wi-Fi, Windows 11 Home, Silver',
        price: 619,
        images: [
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71VziZ7o1-L._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71bV6jyfmnL._AC_SL1500_.jpg'
        ],
        ratingValue: 4.8,
        ratingCount: 6,
        inStock: true
    },
    {
        id: 3,
        category: 'laptops',
        label: 'SAMSUNG 15.6” Galaxy Book2 Pro Laptop Computer, i7 / 16GB / 512GB, 12th Gen Intel Core Processor, Evo Certified, Lightweight, 2022 Model, Graphite',
        price: 1287,
        images: [
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61M-QNJf4pL._AC_SL1200_.jpg',
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81HpxDSf21L._AC_SL1500_.jpg'
        ],
        ratingValue: 4.3,
        ratingCount: 138,
        inStock: true
    },
    {
        id: 4,
        category: 'laptops',
        label: 'SAMSUNG Galaxy Book Pro Intel Evo Platform Laptop Computer 15.6" AMOLED Screen 11th Gen Intel Core i5 Processor 8GB Memory 512GB SSD Long-Lasting Battery, Mystic Blue',
        price: 714,
        images: [
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81fEklfNGSS._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71Y+AYbcZ3S._AC_SL1500_.jpg'
        ],
        ratingValue: 4.4,
        ratingCount: 150,
        inStock: true
    },
    {
        id: 5,
        category: 'laptops',
        label: 'Microsoft - Surface Pro 7+ - 12.3” Touch Screen - Intel Core i5 - 8GB Memory - 128GB SSD with Black Type Cover (Latest Model) - Platinum',
        price: 696,
        images: [
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/616kd0jbuoL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71v2U9DriOL._AC_SL1500_.jpg'
        ],
        ratingValue: 4.3,
        ratingCount: 160,
        inStock: true
    },
    {
        id: 6,
        category: 'mobiles',
        label: 'SAMSUNG Galaxy A03s Cell Phone, Factory Unlocked Android Smartphone, 32GB, 3 Camera Lenses, Infinity Display Screen, Long Battery Life, Expandable Storage, US Version, Black',
        price: 209,
        images: [
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Dy9hZJ4ML._AC_SL1200_.jpg',
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/611zFq0+vJL._AC_SL1201_.jpg'
        ],
        ratingValue: 4.2,
        ratingCount: 514,
        inStock: true
    },
    {
        id: 7,
        category: 'mobiles',
        label: 'SAMSUNG Galaxy Z Flip 3 5G Cell Phone, Factory Unlocked Android Smartphone, 256GB, Flex Mode, Super Steady Camera, Ultra Compact, US Version, Phantom Black',
        price: 1149,
        images: [
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61bfdXk7nfL._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Zw97IYF2L._AC_SL1500_.jpg'
        ],
        ratingValue: 4.3,
        ratingCount: 362,
        inStock: false
    },
    {
        id: 8,
        category: 'mobiles',
        label: 'Apple iPhone 11 Pro Max, 256GB, Space Gray - Unlocked (Renewed)',
        price: 579,
        images: [
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81LmL94PUvS._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51VP5aiYl-L._AC_SL1000_.jpg'
        ],
        ratingValue: 4.3,
        ratingCount: 10908,
        inStock: true
    },
    {
        id: 9,
        category: 'mobiles',
        label: 'Apple iPhone 12, 128GB, (Product)Red - Fully Unlocked (Renewed)',
        price: 489,
        images: [
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/710mNDEecxL._AC_SL1500_.jpg'
        ],
        ratingValue: 4.3,
        ratingCount: 3041,
        inStock: true
    },
    {
        id: 10,
        category: 'mobiles',
        label: 'Huawei Nova 5T YAL-L21 128GB 6GB RAM International Version - Crush Blue',
        price: 319,
        images: [
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61SnLBKlA0L._AC_SL1000_.jpg',
            'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/617YocpWTdL._AC_SL1000_.jpg'
        ],
        ratingValue: 4.5,
        ratingCount: 510,
        inStock: true
    },
]