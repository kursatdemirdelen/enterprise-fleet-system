/**
 * Icon Barrel Export
 * 
 * Centralized icon imports for better tree-shaking and clearer dependencies.
 * Only import icons that are actually used in the application.
 */

export {
    // Navigation
    Home,
    Car,
    Calendar,
    FileText,
    Settings,

    // Actions
    Plus,
    Edit,
    Search,
    Filter,
    Download,
    Upload,
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    ArrowDownRight,
    ChevronRight,
    ChevronLeft,
    ChevronDown,
    Check,
    X,

    // Status & Info
    AlertCircle,
    AlertTriangle,
    Info,
    ShieldCheck,
    Activity,

    // Vehicle Related
    Wrench,
    Droplets,
    MapPin,

    // Time & Calendar
    Clock,
    CalendarClock,
    History,

    // Trends
    TrendingUp,
    TrendingDown,

    // User
    User,
    Bell,
    Shield,
    Globe,
} from "lucide-react";

// Type exports for icon props
export type { LucideIcon, LucideProps } from "lucide-react";
