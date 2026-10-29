export interface Driver {
    id: string;
    name: string;
    licenseNumber: string;
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
    plate: string;
    brand: string;
    model: string;
    lastMaintenanceKm: number;
    currentKm: number;
    inspectionDate: string;
    oilChangeKm: number;
    totalCost: number;
    currentDriverId?: string;
    avgFuelConsumption?: number; // L/100km
    purchasePrice: number; // Purchase Price (TL)
    marketValue: number; // Current Market Value (TL)
    purchaseDate: string; // Purchase Date
}

export const DRIVERS_DATA: Driver[] = [
    {
        id: "d1",
        name: "Ahmet Yılmaz",
        licenseNumber: "TR123456",
        phone: "+90 532 111 22 33",
        email: "ahmet.y@fleet.example.com",
        status: "on_trip",
        experience: "12 Yıl",
        rating: 4.8,
        assignedVehicleId: "1"
    },
    {
        id: "d2",
        name: "Mehmet Demir",
        licenseNumber: "TR789012",
        phone: "+90 533 444 55 66",
        email: "mehmet.d@fleet.example.com",
        status: "available",
        experience: "8 Yıl",
        rating: 4.5,
        assignedVehicleId: "2"
    },
    {
        id: "d3",
        name: "Caner Özcan",
        licenseNumber: "TR345678",
        phone: "+90 535 777 88 99",
        email: "caner.o@fleet.example.com",
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
        plate: "34 ABC 123",
        brand: "Tesla",
        model: "Model 3",
        lastMaintenanceKm: 45000,
        currentKm: 54200,
        inspectionDate: "2026-02-01",
        oilChangeKm: 60000,
        totalCost: 12500,
        currentDriverId: "d1",
        avgFuelConsumption: 0, // Electric
        purchasePrice: 1800000,
        marketValue: 1650000,
        purchaseDate: "2023-01-15",
    },
    {
        id: "2",
        plate: "34 XYZ 789",
        brand: "Mercedes",
        model: "Sprinter",
        lastMaintenanceKm: 120000,
        currentKm: 125000,
        inspectionDate: "2026-06-15",
        oilChangeKm: 135000,
        totalCost: 28400,
        currentDriverId: "d2",
        avgFuelConsumption: 9.8,
        purchasePrice: 1200000,
        marketValue: 950000,
        purchaseDate: "2022-05-20",
    },
    {
        id: "3",
        plate: "06 DEF 456",
        brand: "BMW",
        model: "520i",
        lastMaintenanceKm: 85000,
        currentKm: 94500,
        inspectionDate: "2026-01-25",
        oilChangeKm: 100000,
        totalCost: 18900,
        avgFuelConsumption: 7.2,
        purchasePrice: 2500000,
        marketValue: 2300000,
        purchaseDate: "2023-08-10",
    },
    {
        id: "4",
        plate: "35 GHI 901",
        brand: "Audi",
        model: "A4",
        lastMaintenanceKm: 30000,
        currentKm: 32000,
        inspectionDate: "2027-03-10",
        oilChangeKm: 45000,
        totalCost: 5200,
        avgFuelConsumption: 6.5,
        purchasePrice: 2100000,
        marketValue: 1950000,
        purchaseDate: "2024-01-05",
    },
    {
        id: "5",
        plate: "16 JKL 234",
        brand: "Volkswagen",
        model: "Crafter",
        lastMaintenanceKm: 150000,
        currentKm: 159100,
        inspectionDate: "2026-05-20",
        oilChangeKm: 165000,
        totalCost: 32000,
        avgFuelConsumption: 10.2,
        purchasePrice: 1100000,
        marketValue: 850000,
        purchaseDate: "2021-11-15",
    },
    {
        id: "6",
        plate: "07 MNO 567",
        brand: "Ford",
        model: "Transit",
        lastMaintenanceKm: 200000,
        currentKm: 205000,
        inspectionDate: "2026-01-20",
        oilChangeKm: 215000,
        totalCost: 15000,
        avgFuelConsumption: 9.5,
        purchasePrice: 900000,
        marketValue: 650000,
        purchaseDate: "2020-03-01",
    },
    {
        id: "7",
        plate: "34 PRS 111",
        brand: "Toyota",
        model: "Corolla",
        lastMaintenanceKm: 60000,
        currentKm: 68500,
        inspectionDate: "2026-09-01",
        oilChangeKm: 75000,
        totalCost: 7800,
        avgFuelConsumption: 5.8,
        purchasePrice: 1150000,
        marketValue: 1050000,
        purchaseDate: "2023-04-12",
    },
    {
        id: "8",
        plate: "01 TUV 222",
        brand: "Hyundai",
        model: "i20",
        lastMaintenanceKm: 40000,
        currentKm: 41000,
        inspectionDate: "2027-01-12",
        oilChangeKm: 55000,
        totalCost: 4200,
        avgFuelConsumption: 5.4,
        purchasePrice: 950000,
        marketValue: 900000,
        purchaseDate: "2023-11-20",
    },
    {
        id: "9",
        plate: "42 KLM 333",
        brand: "Renault",
        model: "Megane",
        lastMaintenanceKm: 95000,
        currentKm: 110000,
        inspectionDate: "2026-03-18",
        oilChangeKm: 105000,
        totalCost: 21000,
        avgFuelConsumption: 6.2,
        purchasePrice: 1300000,
        marketValue: 1100000,
        purchaseDate: "2022-09-05",
    },
    {
        id: "10",
        plate: "34 BUS 444",
        brand: "Isuzu",
        model: "NPR",
        lastMaintenanceKm: 180000,
        currentKm: 195000,
        inspectionDate: "2026-02-05",
        oilChangeKm: 200000,
        totalCost: 41000,
        avgFuelConsumption: 12.5,
        purchasePrice: 1600000,
        marketValue: 1300000,
        purchaseDate: "2021-06-30",
    },
    {
        id: "11",
        plate: "27 SRC 555",
        brand: "Peugeot",
        model: "3008",
        lastMaintenanceKm: 50000,
        currentKm: 57500,
        inspectionDate: "2026-11-30",
        oilChangeKm: 65000,
        totalCost: 9800,
        avgFuelConsumption: 6.8,
        purchasePrice: 1750000,
        marketValue: 1600000,
        purchaseDate: "2023-02-14",
    },
    {
        id: "12",
        plate: "33 ADP 666",
        brand: "Fiat",
        model: "Doblo",
        lastMaintenanceKm: 130000,
        currentKm: 138500,
        inspectionDate: "2026-04-10",
        oilChangeKm: 145000,
        totalCost: 26500,
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
