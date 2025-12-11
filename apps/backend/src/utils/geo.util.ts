
import geoip from 'geoip-lite';

export const detectCountry = (ip: string): string => {
    // Handle localhost/local IP
    if (ip === '::1' || ip === '127.0.0.1' || ip.startsWith('192.168.')) {
        return 'BD'; // Default to BD for local testing, or change as needed
    }

    const geo = geoip.lookup(ip);
    return geo ? geo.country : 'US'; // Default to US if not found
};
