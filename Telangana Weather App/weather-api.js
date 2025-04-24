// OpenWeatherMap API Configuration
const API_CONFIG = {
    key: '8d2de98e089f1c28e1a22fc19a24ef04', // Free tier API key
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
    geoUrl: 'https://api.openweathermap.org/geo/1.0/'
};

// District coordinates for Telangana
const districtCoordinates = {
    'Adilabad': { lat: 19.6640, lon: 78.5320 },
    'Bhadradri Kothagudem': { lat: 17.5478, lon: 80.6189 },
    'Hyderabad': { lat: 17.3850, lon: 78.4867 },
    'Jagtial': { lat: 18.7952, lon: 78.9381 },
    'Jangaon': { lat: 17.7246, lon: 79.1463 },
    'Jayashankar Bhupalpally': { lat: 18.1990, lon: 79.9333 },
    'Jogulamba Gadwal': { lat: 16.2334, lon: 77.8060 },
    'Kamareddy': { lat: 18.3192, lon: 78.3341 },
    'Karimnagar': { lat: 18.4392, lon: 79.1288 },
    'Khammam': { lat: 17.2473, lon: 80.1514 },
    'Kumuram Bheem': { lat: 19.3600, lon: 79.2800 },
    'Mahabubabad': { lat: 17.6018, lon: 80.0023 },
    'Mahabubnagar': { lat: 16.7375, lon: 77.9891 },
    'Mancherial': { lat: 18.8714, lon: 79.4443 },
    'Medak': { lat: 18.0423, lon: 78.2615 },
    'Medchal': { lat: 17.6290, lon: 78.4813 },
    'Mulugu': { lat: 18.1912, lon: 80.1842 },
    'Nagarkurnool': { lat: 16.4807, lon: 78.3310 },
    'Nalgonda': { lat: 17.0575, lon: 79.2674 },
    'Narayanpet': { lat: 16.7472, lon: 77.4948 },
    'Nirmal': { lat: 19.0968, lon: 78.3428 },
    'Nizamabad': { lat: 18.6725, lon: 78.0941 },
    'Peddapalli': { lat: 18.6151, lon: 79.3828 },
    'Rajanna Sircilla': { lat: 18.3891, lon: 78.8146 },
    'Ranga Reddy': { lat: 17.3984, lon: 78.5511 },
    'Sangareddy': { lat: 17.6250, lon: 78.0889 },
    'Siddipet': { lat: 18.1018, lon: 78.8528 },
    'Suryapet': { lat: 17.1307, lon: 79.6236 },
    'Vikarabad': { lat: 17.3379, lon: 77.9053 },
    'Wanaparthy': { lat: 16.3622, lon: 77.9543 },
    'Warangal Rural': { lat: 18.0000, lon: 79.6000 },
    'Warangal Urban': { lat: 17.9689, lon: 79.5941 },
    'Yadadri Bhuvanagiri': { lat: 17.5077, lon: 78.9047 }
};

// Weather icons mapping
const weatherIcons = {
    'sun': '<i class="fas fa-sun"></i>',
    'cloud': '<i class="fas fa-cloud"></i>',
    'rain': '<i class="fas fa-cloud-rain"></i>',
    'snow': '<i class="fas fa-snowflake"></i>',
    'storm': '<i class="fas fa-bolt"></i>',
    'fog': '<i class="fas fa-smog"></i>',
    'bolt': '<i class="fas fa-bolt"></i>',
    'cloud-rain': '<i class="fas fa-cloud-rain"></i>',
    'snowflake': '<i class="fas fa-snowflake"></i>',
    'smog': '<i class="fas fa-smog"></i>'
};

// Map OpenWeatherMap weather IDs to our condition strings
function getConditionFromWeatherId(id) {
    if (id >= 200 && id < 300) return 'Stormy';
    if (id >= 300 && id < 400) return 'Drizzle';
    if (id >= 500 && id < 600) return 'Rainy';
    if (id >= 600 && id < 700) return 'Snowy';
    if (id >= 700 && id < 800) return 'Foggy';
    if (id === 800) return 'Sunny';
    if (id > 800) return 'Cloudy';
    return 'Sunny';
}

// Map OpenWeatherMap weather IDs to our icon strings
function getIconFromWeatherId(id) {
    if (id >= 200 && id < 300) return 'bolt';
    if (id >= 300 && id < 500) return 'cloud-rain';
    if (id >= 500 && id < 600) return 'cloud-rain';
    if (id >= 600 && id < 700) return 'snowflake';
    if (id >= 700 && id < 800) return 'smog';
    if (id === 800) return 'sun';
    if (id > 800) return 'cloud';
    return 'sun';
}

// Generate forecast data
function generateForecast(temp, condition) {
    const result = [];
    const today = new Date();
    
    for (let i = 0; i < 5; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);
        
        result.push({
            date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
            temperature: Math.round(temp) + Math.floor(Math.random() * 8) - 4,
            condition: condition,
            icon: getIconFromWeatherId(800)
        });
    }
    
    return result;
}

// Generate historical data from current temperature
function generateHistoricalData(temp) {
    const result = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        
        result.push({
            date: date.toLocaleDateString('en-US', { weekday: 'short' }),
            temperature: Math.round(temp) + Math.floor(Math.random() * 8) - 4
        });
    }
    
    return result;
}

// Fetch live weather data from OpenWeatherMap API
async function fetchWeatherData(district) {
    console.log(`Fetching weather data for ${district}`);
    if (!districtCoordinates[district]) {
        throw new Error(`No coordinates found for ${district}`);
    }
    
    const { lat, lon } = districtCoordinates[district];
    const url = `${API_CONFIG.baseUrl}weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_CONFIG.key}`;
    
    try {
        console.log('Fetching from URL:', url);
        const response = await fetch(url);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error Response:', errorText);
            throw new Error(`API Error: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        console.log('Received data:', data);
        
        // Transform API data to match our app's format
        const weatherInfo = {
            temperature: Math.round(data.main.temp),
            feelsLike: Math.round(data.main.feels_like),
            condition: getConditionFromWeatherId(data.weather[0].id),
            humidity: data.main.humidity,
            wind: Math.round(data.wind.speed),
            pressure: data.main.pressure,
            visibility: Math.round((data.visibility || 10000) / 1609), // convert meters to miles
            uv: 5, // UV index not available in basic weather endpoint
            icon: getIconFromWeatherId(data.weather[0].id),
            precipitation: 0, // Not available in basic weather endpoint
            forecast: generateForecast(data.main.temp, getConditionFromWeatherId(data.weather[0].id)),
            historicalData: generateHistoricalData(data.main.temp)
        };
        
        console.log('Transformed weather info:', weatherInfo);
        return weatherInfo;
        
    } catch (error) {
        console.error("Error fetching weather data:", {
            message: error.message,
            stack: error.stack,
            url: url
        });
        throw error;
    }
}