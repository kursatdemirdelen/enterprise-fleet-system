export interface Driver {
    id: string;
    name: string;
    licenseNo: string;
    phone: string;
    email: string;
    avatar?: string;
    status: 'on_trip' | 'available' | 'off_duty';
    experience: string;
    rating: number;
    assignedVehicleId?: string;
}

export interface FuelLog {
    id: string;
    vehicleId: string;
    date: string;
    km: number;
    liters: number;
    amount: number;
    station: string;
}

export interface Vehicle {
    id: string;
    plaka: string;
    marka: string;
    model: string;
    sonBakimKM: number;
    mevcutKM: number;
    muayeneTarihi: string;
    yagDegisimiKM: number;
    toplamMasraf: number;
    currentDriverId?: string;
    avgFuelConsumption?: number; // L/100km
    purchasePrice: number; // Alış Fiyatı (TL)
    marketValue: number; // Güncel Piyasa Değeri (TL)
    purchaseDate: string; // Satın Alma Tarihi
}

export const DRIVERS_DATA: Driver[] = [
    {
        id: "d1",
        name: "Ahmet Yılmaz",
        licenseNo: "TR123456",
        phone: "+90 532 111 22 33",
        email: "ahmet.y@cartrack.io",
        status: "on_trip",
        experience: "12 Yıl",
        rating: 4.8,
        assignedVehicleId: "1"
    },
    {
        id: "d2",
        name: "Mehmet Demir",
        licenseNo: "TR789012",
        phone: "+90 533 444 55 66",
        email: "mehmet.d@cartrack.io",
        status: "available",
        experience: "8 Yıl",
        rating: 4.5,
        assignedVehicleId: "2"
    },
    {
        id: "d3",
        name: "Caner Özcan",
        licenseNo: "TR345678",
        phone: "+90 535 777 88 99",
        email: "caner.o@cartrack.io",
        status: "off_duty",
        experience: "5 Yıl",
        rating: 4.2
    }
];

export const FUEL_LOGS_DATA: FuelLog[] = [
    { id: "f1", vehicleId: "1", date: "2025-02-10", km: 54100, liters: 45, amount: 1850, station: "Shell - Gebze" },
    { id: "f2", vehicleId: "1", date: "2025-02-01", km: 53500, liters: 42, amount: 1720, station: "Opet - Kurtköy" },
    { id: "f3", vehicleId: "2", date: "2025-02-12", km: 124800, liters: 65, amount: 2650, station: "BP - Pendik" },
];

export const VEHICLES_DATA: Vehicle[] = [
    {
        id: "1",
        plaka: "34 ABC 123",
        marka: "Tesla",
        model: "Model 3",
        sonBakimKM: 45000,
        mevcutKM: 54200,
        muayeneTarihi: "2026-02-01",
        yagDegisimiKM: 60000,
        toplamMasraf: 12500,
        currentDriverId: "d1",
        avgFuelConsumption: 0, // Electric
        purchasePrice: 1800000,
        marketValue: 1650000,
        purchaseDate: "2023-01-15",
    },
    {
        id: "2",
        plaka: "34 XYZ 789",
        marka: "Mercedes",
        model: "Sprinter",
        sonBakimKM: 120000,
        mevcutKM: 125000,
        muayeneTarihi: "2026-06-15",
        yagDegisimiKM: 135000,
        toplamMasraf: 28400,
        currentDriverId: "d2",
        avgFuelConsumption: 9.8,
        purchasePrice: 1200000,
        marketValue: 950000,
        purchaseDate: "2022-05-20",
    },
    {
        id: "3",
        plaka: "06 DEF 456",
        marka: "BMW",
        model: "520i",
        sonBakimKM: 85000,
        mevcutKM: 94500,
        muayeneTarihi: "2026-01-25",
        yagDegisimiKM: 100000,
        toplamMasraf: 18900,
        avgFuelConsumption: 7.2,
        purchasePrice: 2500000,
        marketValue: 2300000,
        purchaseDate: "2023-08-10",
    },
    {
        id: "4",
        plaka: "35 GHI 901",
        marka: "Audi",
        model: "A4",
        sonBakimKM: 30000,
        mevcutKM: 32000,
        muayeneTarihi: "2027-03-10",
        yagDegisimiKM: 45000,
        toplamMasraf: 5200,
        avgFuelConsumption: 6.5,
        purchasePrice: 2100000,
        marketValue: 1950000,
        purchaseDate: "2024-01-05",
    },
    {
        id: "5",
        plaka: "16 JKL 234",
        marka: "Volkswagen",
        model: "Crafter",
        sonBakimKM: 150000,
        mevcutKM: 159100,
        muayeneTarihi: "2026-05-20",
        yagDegisimiKM: 165000,
        toplamMasraf: 32000,
        avgFuelConsumption: 10.2,
        purchasePrice: 1100000,
        marketValue: 850000,
        purchaseDate: "2021-11-15",
    },
    {
        id: "6",
        plaka: "07 MNO 567",
        marka: "Ford",
        model: "Transit",
        sonBakimKM: 200000,
        mevcutKM: 205000,
        muayeneTarihi: "2026-01-20",
        yagDegisimiKM: 215000,
        toplamMasraf: 15000,
        avgFuelConsumption: 9.5,
        purchasePrice: 900000,
        marketValue: 650000,
        purchaseDate: "2020-03-01",
    },
    {
        id: "7",
        plaka: "34 PRS 111",
        marka: "Toyota",
        model: "Corolla",
        sonBakimKM: 60000,
        mevcutKM: 68500,
        muayeneTarihi: "2026-09-01",
        yagDegisimiKM: 75000,
        toplamMasraf: 7800,
        avgFuelConsumption: 5.8,
        purchasePrice: 1150000,
        marketValue: 1050000,
        purchaseDate: "2023-04-12",
    },
    {
        id: "8",
        plaka: "01 TUV 222",
        marka: "Hyundai",
        model: "i20",
        sonBakimKM: 40000,
        mevcutKM: 41000,
        muayeneTarihi: "2027-01-12",
        yagDegisimiKM: 55000,
        toplamMasraf: 4200,
        avgFuelConsumption: 5.4,
        purchasePrice: 950000,
        marketValue: 900000,
        purchaseDate: "2023-11-20",
    },
    {
        id: "9",
        plaka: "42 KLM 333",
        marka: "Renault",
        model: "Megane",
        sonBakimKM: 95000,
        mevcutKM: 110000,
        muayeneTarihi: "2026-03-18",
        yagDegisimiKM: 105000,
        toplamMasraf: 21000,
        avgFuelConsumption: 6.2,
        purchasePrice: 1300000,
        marketValue: 1100000,
        purchaseDate: "2022-09-05",
    },
    {
        id: "10",
        plaka: "34 BUS 444",
        marka: "Isuzu",
        model: "NPR",
        sonBakimKM: 180000,
        mevcutKM: 195000,
        muayeneTarihi: "2026-02-05",
        yagDegisimiKM: 200000,
        toplamMasraf: 41000,
        avgFuelConsumption: 12.5,
        purchasePrice: 1600000,
        marketValue: 1300000,
        purchaseDate: "2021-06-30",
    },
    {
        id: "11",
        plaka: "27 SRC 555",
        marka: "Peugeot",
        model: "3008",
        sonBakimKM: 50000,
        mevcutKM: 57500,
        muayeneTarihi: "2026-11-30",
        yagDegisimiKM: 65000,
        toplamMasraf: 9800,
        avgFuelConsumption: 6.8,
        purchasePrice: 1750000,
        marketValue: 1600000,
        purchaseDate: "2023-02-14",
    },
    {
        id: "12",
        plaka: "33 ADP 666",
        marka: "Fiat",
        model: "Doblo",
        sonBakimKM: 130000,
        mevcutKM: 138500,
        muayeneTarihi: "2026-04-10",
        yagDegisimiKM: 145000,
        toplamMasraf: 26500,
        avgFuelConsumption: 7.5,
        purchasePrice: 850000,
        marketValue: 600000,
        purchaseDate: "2021-01-10",
    },
];

export const MONTHLY_EXPENSES = [
    { month: "Şubat", amount: 7200 },
    { month: "Mart", amount: 9800 },
    { month: "Nisan", amount: 6500 },
    { month: "Mayıs", amount: 11200 },
    { month: "Haziran", amount: 8700 },
    { month: "Temmuz", amount: 13400 },
    { month: "Ağustos", amount: 4500 },
    { month: "Eylül", amount: 12000 },
    { month: "Ekim", amount: 8000 },
    { month: "Kasım", amount: 15000 },
    { month: "Aralık", amount: 9500 },
    { month: "Ocak", amount: 12500 },
];
