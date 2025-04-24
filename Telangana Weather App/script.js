// Static weather data (fallback)
const weatherData = {
    'Adilabad': { temperature: 75, condition: 'Sunny', humidity: 60, wind: 10, icon: 'sun', description: 'Adilabad is a district in the Indian state of Telangana.' },
    'Bhadradri Kothagudem': { temperature: 80, condition: 'Sunny', humidity: 50, wind: 15, icon: 'sun', description: 'Bhadradri Kothagudem is a district in the Indian state of Telangana.' },
    'Hyderabad': { temperature: 85, condition: 'Sunny', humidity: 40, wind: 10, icon: 'sun', description: 'Hyderabad is the capital and largest city of the Indian state of Telangana.' },
    'Jagtial': { temperature: 75, condition: 'Cloudy', humidity: 60, wind: 10, icon: 'cloud', description: 'Jagtial is a district in the Indian state of Telangana.' },
    'Jangaon': { temperature: 75, condition: 'Rainy', humidity: 80, wind: 15, icon: 'rain', description: 'Jangaon is a district in the Indian state of Telangana.' },
    'Jayashankar Bhupalpally': { temperature: 70, condition: 'Sunny', humidity: 50, wind: 10, icon: 'sun', description: 'Jayashankar Bhupalpally is a district in the Indian state of Telangana.' },
    'Jogulamba Gadwal': { temperature: 80, condition: 'Sunny', humidity: 40, wind: 15, icon: 'sun', description: 'Jogulamba Gadwal is a district in the Indian state of Telangana.' },
    'Kamareddy': { temperature: 75, condition: 'Cloudy', humidity: 60, wind: 10, icon: 'cloud', description: 'Kamareddy is a district in the Indian state of Telangana.' },
    'Karimnagar': { temperature: 80, condition: 'Sunny', humidity: 50, wind: 10, icon: 'sun', description: 'Karimnagar is a district in the Indian state of Telangana.' },
    'Khammam': { temperature: 85, condition: 'Sunny', humidity: 40, wind: 15, icon: 'sun', description: 'Khammam is a district in the Indian state of Telangana.' },
    'Kumuram Bheem': { temperature: 70, condition: 'Rainy', humidity: 80, wind: 10, icon: 'rain', description: 'Kumuram Bheem is a district in the Indian state of Telangana.' },
    'Mahabubabad': { temperature: 75, condition: 'Sunny', humidity: 60, wind: 10, icon: 'sun', description: 'Mahabubabad is a district in the Indian state of Telangana.' },
    'Mahabubnagar': { temperature: 80, condition: 'Sunny', humidity: 50, wind: 15, icon: 'sun', description: 'Mahabubnagar is a district in the Indian state of Telangana.' },
    'Mancherial': { temperature: 85, condition: 'Sunny', humidity: 40, wind: 10, icon: 'sun', description: 'Mancherial is a district in the Indian state of Telangana.' },
    'Medak': { temperature: 75, condition: 'Cloudy', humidity: 60, wind: 10, icon: 'cloud', description: 'Medak is a district in the Indian state of Telangana.' },
    'Medchal': { temperature: 80, condition: 'Sunny', humidity: 50, wind: 15, icon: 'sun', description: 'Medchal is a district in the Indian state of Telangana.' },
    'Mulugu': { temperature: 70, condition: 'Rainy', humidity: 80, wind: 10, icon: 'rain', description: 'Mulugu is a district in the Indian state of Telangana.' },
    'Nagarkurnool': { temperature: 75, condition: 'Sunny', humidity: 60, wind: 10, icon: 'sun', description: 'Nagarkurnool is a district in the Indian state of Telangana.' },
    'Nalgonda': { temperature: 80, condition: 'Sunny', humidity: 50, wind: 15, icon: 'sun', description: 'Nalgonda is a district in the Indian state of Telangana.' },
    'Narayanpet': { temperature: 85, condition: 'Sunny', humidity: 40, wind: 10, icon: 'sun', description: 'Narayanpet is a district in the Indian state of Telangana.' },
    'Nirmal': { temperature: 75, condition: 'Cloudy', humidity: 60, wind: 10, icon: 'cloud', description: 'Nirmal is a district in the Indian state of Telangana.' },
    'Nizamabad': { temperature: 80, condition: 'Sunny', humidity: 50, wind: 15, icon: 'sun', description: 'Nizamabad is a district in the Indian state of Telangana.' },
    'Peddapalli': { temperature: 85, condition: 'Sunny', humidity: 40, wind: 10, icon: 'sun', description: 'Peddapalli is a district in the Indian state of Telangana.' },
    'Rajanna Sircilla': { temperature: 70, condition: 'Rainy', humidity: 80, wind: 10, icon: 'rain', description: 'Rajanna Sircilla is a district in the Indian state of Telangana.' },
    'Ranga Reddy': { temperature: 75, condition: 'Sunny', humidity: 60, wind: 10, icon: 'sun', description: 'Ranga Reddy is a district in the Indian state of Telangana.' },
    'Sangareddy': { temperature: 80, condition: 'Sunny', humidity: 50, wind: 15, icon: 'sun', description: 'Sangareddy is a district in the Indian state of Telangana.' },
    'Siddipet': { temperature: 85, condition: 'Sunny', humidity: 40, wind: 10, icon: 'sun', description: 'Siddipet is a district in the Indian state of Telangana.' },
    'Suryapet': { temperature: 75, condition: 'Cloudy', humidity: 60, wind: 10, icon: 'cloud', description: 'Suryapet is a district in the Indian state of Telangana.' },
    'Vikarabad': { temperature: 80, condition: 'Sunny', humidity: 50, wind: 15, icon: 'sun', description: 'Vikarabad is a district in the Indian state of Telangana.' },
    'Wanaparthy': { temperature: 70, condition: 'Rainy', humidity: 80, wind: 10, icon: 'rain', description: 'Wanaparthy is a district in the Indian state of Telangana.' },
    'Warangal Rural': { temperature: 75, condition: 'Sunny', humidity: 60, wind: 10, icon: 'sun', description: 'Warangal Rural is a district in the Indian state of Telangana.' },
    'Warangal Urban': { temperature: 80, condition: 'Sunny', humidity: 50, wind: 15, icon: 'sun', description: 'Warangal Urban is a district in the Indian state of Telangana.' },
    'Yadadri Bhuvanagiri': { temperature: 85, condition: 'Sunny', humidity: 40, wind: 10, icon: 'sun', description: 'Yadadri Bhuvanagiri is a district in the Indian state of Telangana.' },
};

// Update weather data with more details
for (const district in weatherData) {
    weatherData[district] = {
        ...weatherData[district],
        feelsLike: Math.round(weatherData[district].temperature - 2),
        pressure: 1011 + Math.floor(Math.random() * 10),
        visibility: 6 + Math.floor(Math.random() * 4),
        uv: 4 + Math.floor(Math.random() * 3),
        precipitation: Math.floor(Math.random() * 30),
        districtImage: `https://source.unsplash.com/400x300/?${district},telangana`,
        districtStats: {
            population: Math.floor(Math.random() * 1000000) + 500000,
            area: Math.floor(Math.random() * 5000) + 2000,
            literacy: Math.floor(Math.random() * 20) + 70,
            density: Math.floor(Math.random() * 500) + 200
        },
        forecast: generateForecast(weatherData[district].temperature, weatherData[district].condition),
        historicalData: generateHistoricalData(weatherData[district].temperature)
    };
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
    initializeFavorites();
    initializeDarkMode();
    initializeLiveDataToggle();
    document.getElementById('district-select').value = '';
});

// Initialize live data toggle
function initializeLiveDataToggle() {
    const toggle = document.getElementById('live-data-toggle');
    const useLiveData = localStorage.getItem('useLiveData') === 'true';
    toggle.checked = useLiveData;
    updateDataSourceIndicator(useLiveData);
    
    toggle.addEventListener('change', function(e) {
        const useLive = e.target.checked;
        localStorage.setItem('useLiveData', useLive);
        updateDataSourceIndicator(useLive);
        
        const district = document.getElementById('district-select').value;
        if (district) {
            updateWeather(district);
        }
    });
}

// Update data source indicator
function updateDataSourceIndicator(isLive) {
    const indicator = document.getElementById('data-source-indicator');
    indicator.innerHTML = isLive ? 
        '<i class="fas fa-cloud-download-alt mr-1"></i> Live data' : 
        '<i class="fas fa-database mr-1"></i> Static data';
}

// Set current date
function setCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    document.getElementById('current-date').textContent = currentDate;
}

// Generate static forecast data
function generateForecast(baseTemp, baseCondition) {
    const forecast = [];
    const conditions = ['Sunny', 'Cloudy', 'Rainy'];
    const today = new Date();
    
    for (let i = 1; i <= 5; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);
        
        forecast.push({
            date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
            temperature: Math.round(baseTemp + (Math.random() * 10 - 5)),
            condition: conditions[Math.floor(Math.random() * conditions.length)],
            icon: weatherIcons[conditions[Math.floor(Math.random() * conditions.length)].toLowerCase()]
        });
    }
    
    return forecast;
}

// Generate static historical data
function generateHistoricalData(baseTemp) {
    const data = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        
        data.push({
            date: date.toLocaleDateString('en-US', { weekday: 'short' }),
            temperature: Math.round(baseTemp + (Math.random() * 8 - 4))
        });
    }
    
    return data;
}

// Handle district selection
document.getElementById('district-select').addEventListener('change', (e) => {
    const district = e.target.value;
    if (district) {
        updateWeather(district);
    } else {
        clearWeatherDisplay();
    }
});

// Update weather display
async function updateWeather(district) {
    if (!district) return;
    
    const loadingElement = document.getElementById('loading');
    loadingElement.innerHTML = '<div class="loading-spinner"></div>';
    loadingElement.classList.remove('hidden');
    
    // Clear previous animations
    document.querySelectorAll('#weather .animate__animated')
        .forEach(el => el.classList.remove(
            'animate__zoomInDown', 
            'animate__slideInUp', 
            'animate__rotateIn',
            'animate__fadeIn'
        ));
    
    try {
        const useLiveData = document.getElementById('live-data-toggle').checked;
        let weatherInfo;
        
        if (useLiveData) {
            weatherInfo = await fetchWeatherData(district);
            // Add static data that isn't available from API
            weatherInfo.description = weatherData[district].description;
            weatherInfo.districtImage = weatherData[district].districtImage;
            weatherInfo.districtStats = weatherData[district].districtStats;
        } else {
            weatherInfo = weatherData[district];
        }
        
        updateWeatherUI(district, weatherInfo);
        
    } catch (error) {
        console.error('Error updating weather:', error);
        showNotification('Failed to fetch weather data. Using static data.', 'error');
        // Fallback to static data
        updateWeatherUI(district, weatherData[district]);
    } finally {
        loadingElement.innerHTML = '';
        loadingElement.classList.add('hidden');
    }
}

// Update the UI with weather data
function updateWeatherUI(district, data) {
    // Update theme based on condition
    const condition = data.condition.toLowerCase();
    let themeClass = 'sunny-theme';
    
    if (condition.includes('cloud')) themeClass = 'cloudy-theme';
    else if (condition.includes('rain')) themeClass = 'rainy-theme';
    
    // Apply theme if not in dark mode
    if (!document.body.classList.contains('dark-mode')) {
        document.body.className = document.body.className.replace(/sunny-theme|cloudy-theme|rainy-theme/g, '');
        document.body.classList.add('h-screen', 'flex', 'flex-col', 'justify-center', 'items-center', 'p-4', 'transition-all', 'duration-500', themeClass);
    }
    
    // Update weather data in the UI
    document.getElementById('temperature').innerText = `${data.temperature}°F`;
    document.getElementById('condition').innerText = data.condition;
    document.getElementById('humidity-value').innerText = `${data.humidity}%`;
    document.getElementById('wind-value').innerText = `${data.wind} mph`;
    document.getElementById('weather-icon').innerHTML = weatherIcons[data.icon] || '';
    document.getElementById('feels-like-value').innerText = data.feelsLike;
    document.getElementById('pressure-value').innerText = `${data.pressure} hPa`;
    document.getElementById('visibility-value').innerText = `${data.visibility} mi`;
    
    // Check if district is favorited
    updateFavoriteButton(district);
    
    // Add animations
    document.getElementById('temperature').classList.add('animate__fadeIn');
    document.getElementById('condition').classList.add('animate__fadeIn');
    document.getElementById('weather-icon').classList.add('animate__rotateIn');
    document.querySelectorAll('#weather .grid > div').forEach(el => {
        el.classList.add('animate__fadeIn');
    });
    
    // Update forecast
    updateForecastUI(data.forecast);
    
    // Update chart
    updateChartUI(data.historicalData);
}

// Update forecast display with data
function updateForecastUI(forecastData) {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = '';
    
    forecastData.forEach(day => {
        const forecastItem = document.createElement('div');
        forecastItem.className = 'flex-shrink-0 bg-white p-3 rounded-lg text-center shadow-sm animate__animated animate__fadeIn';
        forecastItem.style.minWidth = '100px';
        
        forecastItem.innerHTML = `
            <div class="text-sm text-gray-600">${day.date}</div>
            <div class="my-2 text-blue-500">
                <i class="fas fa-${day.icon}"></i>
            </div>
            <div class="font-medium">${day.temperature}°F</div>
            <div class="text-xs text-gray-500">${day.condition}</div>
        `;
        
        forecastContainer.appendChild(forecastItem);
    });
}

// Update temperature chart with data
function updateChartUI(historicalData) {
    const ctx = document.getElementById('weather-chart').getContext('2d');
    
    // Destroy previous chart if exists
    if (window.temperatureChart) {
        window.temperatureChart.destroy();
    }
    
    // Create new chart
    window.temperatureChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: historicalData.map(d => d.date),
            datasets: [{
                label: 'Temperature (°F)',
                data: historicalData.map(d => d.temperature),
                backgroundColor: 'rgba(66, 153, 225, 0.2)',
                borderColor: 'rgba(66, 153, 225, 1)',
                borderWidth: 2,
                tension: 0.3,
                pointBackgroundColor: 'rgba(66, 153, 225, 1)',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return value + '°F';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + '°F';
                        }
                    }
                }
            }
        }
    });
}

// Clear weather display
function clearWeatherDisplay() {
    document.getElementById('temperature').innerText = '';
    document.getElementById('condition').innerText = '';
    document.getElementById('humidity-value').innerText = '-';
    document.getElementById('wind-value').innerText = '-';
    document.getElementById('weather-icon').innerHTML = '';
    document.getElementById('feels-like-value').innerText = '';
    document.getElementById('pressure-value').innerText = '-';
    document.getElementById('visibility-value').innerText = '-';
    
    // Hide forecast and chart
    document.getElementById('forecast-section').classList.add('hidden');
    document.getElementById('chart-container').classList.add('hidden');
}

// Show district modal
document.getElementById('show-modal').addEventListener('click', () => {
    const district = document.getElementById('district-select').value;
    if (district) {
        const data = weatherData[district];
        
        // Update district description
        document.getElementById('district-description').innerText = data.description;
        
        // Update district image
        document.getElementById('district-image').style.backgroundImage = `url(${data.districtImage})`;
        document.getElementById('district-image').setAttribute('data-district', district);
        
        // Update district stats
        const statsContainer = document.getElementById('district-stats');
        statsContainer.innerHTML = '';
        
        const stats = [
            { icon: 'fa-users', label: 'Population', value: data.districtStats.population },
            { icon: 'fa-mountain', label: 'Elevation', value: data.districtStats.area },
            { icon: 'fa-expand', label: 'Area', value: data.districtStats.literacy },
            { icon: 'fa-cloud-rain', label: 'Rainfall', value: data.districtStats.density }
        ];
        
        stats.forEach(stat => {
            const statElement = document.createElement('div');
            statElement.className = 'bg-gray-50 p-3 rounded-lg flex items-center';
            statElement.innerHTML = `
                <i class="fas ${stat.icon} text-blue-500 mr-2"></i>
                <div>
                    <div class="text-xs text-gray-600">${stat.label}</div>
                    <div class="font-medium">${stat.value}</div>
                </div>
            `;
            statsContainer.appendChild(statElement);
        });
        
        document.getElementById('modal').classList.remove('hidden');
    }
});

// Close modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
});

// Show/Hide forecast
document.getElementById('show-forecast').addEventListener('click', function() {
    const chartContainer = document.getElementById('chart-container');
    const weatherCard = document.querySelector('.weather-card');
    const forecastContainer = document.querySelector('.forecast-container');
    
    if (chartContainer.classList.contains('hidden')) {
        chartContainer.classList.remove('hidden');
        weatherCard.classList.add('expanded');
        forecastContainer.classList.add('expanded');
        // Update chart size after expansion
        if (window.weatherChart) {
            setTimeout(() => {
                window.weatherChart.resize();
            }, 500);
        }
    } else {
        chartContainer.classList.add('hidden');
        weatherCard.classList.remove('expanded');
        forecastContainer.classList.remove('expanded');
    }
});

// Initialize favorites
function initializeFavorites() {
    const favoriteBtn = document.getElementById('favorite-btn');
    
    favoriteBtn.addEventListener('click', () => {
        const district = document.getElementById('district-select').value;
        if (!district) return;
        
        const favorites = getFavorites();
        
        if (favorites.includes(district)) {
            // Remove from favorites
            const newFavorites = favorites.filter(d => d !== district);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            favoriteBtn.querySelector('i').classList.remove('fas', 'text-red-500');
            favoriteBtn.querySelector('i').classList.add('far', 'text-gray-400');
            showNotification(`Removed ${district} from favorites`, 'error');
        } else {
            // Add to favorites
            favorites.push(district);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            favoriteBtn.querySelector('i').classList.remove('far', 'text-gray-400');
            favoriteBtn.querySelector('i').classList.add('fas', 'text-red-500');
            showNotification(`Added ${district} to favorites`, 'success');
        }
        
        // Update favorites list
        updateFavoritesList();
    });
    
    // Initial update of favorites list
    updateFavoritesList();
}

// Get favorites from localStorage
function getFavorites() {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}

// Update favorite button
function updateFavoriteButton(district) {
    const favorites = getFavorites();
    const favoriteBtn = document.getElementById('favorite-btn');
    
    if (favorites.includes(district)) {
        favoriteBtn.querySelector('i').classList.remove('far', 'text-gray-400');
        favoriteBtn.querySelector('i').classList.add('fas', 'text-red-500');
    } else {
        favoriteBtn.querySelector('i').classList.remove('fas', 'text-red-500');
        favoriteBtn.querySelector('i').classList.add('far', 'text-gray-400');
    }
}

// Update favorites list
function updateFavoritesList() {
    const favorites = getFavorites();
    const favoritesContainer = document.getElementById('favorites-container');
    const favoritesList = document.getElementById('favorites-list');
    
    // Clear previous favorites
    favoritesList.innerHTML = '';
    
    if (favorites.length > 0) {
        favoritesContainer.classList.remove('hidden');
        
        favorites.forEach(district => {
            const favoriteItem = document.createElement('button');
            favoriteItem.className = 'px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded-full text-xs text-blue-800 transition-colors duration-300';
            favoriteItem.textContent = district;
            
            favoriteItem.addEventListener('click', () => {
                document.getElementById('district-select').value = district;
                updateWeather(district);
            });
            
            favoritesList.appendChild(favoriteItem);
        });
    } else {
        favoritesContainer.classList.add('hidden');
    }
}

// Initialize dark mode
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('theme-toggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply initial theme
    if (isDarkMode) {
        enableDarkMode();
    }
    
    darkModeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
}

// Enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('sunny-theme', 'cloudy-theme', 'rainy-theme');
    document.body.classList.add('bg-gray-900');
    document.body.classList.remove('bg-gradient-to-r', 'from-blue-100', 'to-blue-200');
    
    document.querySelector('.weather-card').classList.add('bg-gray-800', 'text-white');
    document.querySelector('.weather-card').classList.remove('bg-white');
    
    document.getElementById('theme-icon').classList.remove('fa-moon');
    document.getElementById('theme-icon').classList.add('fa-sun');
    document.getElementById('theme-toggle').classList.remove('bg-gray-800');
    document.getElementById('theme-toggle').classList.add('bg-yellow-400', 'text-gray-900');
    
    // Update all text colors
    document.querySelectorAll('.text-gray-600, .text-gray-500, .text-gray-700').forEach(el => {
        el.classList.add('text-gray-300');
        el.classList.remove('text-gray-600', 'text-gray-500', 'text-gray-700');
    });
    
    document.querySelectorAll('.bg-blue-50').forEach(el => {
        el.classList.add('bg-gray-700');
        el.classList.remove('bg-blue-50');
    });
    
    // Save preference
    localStorage.setItem('darkMode', 'true');
    
    showNotification('Dark mode enabled', 'info');
}

// Disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode', 'bg-gray-900');
    document.body.classList.add('bg-gradient-to-r', 'from-blue-100', 'to-blue-200');
    
    document.querySelector('.weather-card').classList.remove('bg-gray-800', 'text-white');
    document.querySelector('.weather-card').classList.add('bg-white');
    
    document.getElementById('theme-icon').classList.add('fa-moon');
    document.getElementById('theme-icon').classList.remove('fa-sun');
    document.getElementById('theme-toggle').classList.add('bg-gray-800');
    document.getElementById('theme-toggle').classList.remove('bg-yellow-400', 'text-gray-900');
    
    // Restore text colors
    document.querySelectorAll('.text-gray-300').forEach(el => {
        el.classList.add('text-gray-600');
        el.classList.remove('text-gray-300');
    });
    
    document.querySelectorAll('.bg-gray-700').forEach(el => {
        el.classList.add('bg-blue-50');
        el.classList.remove('bg-gray-700');
    });
    
    // Restore weather theme
    const district = document.getElementById('district-select').value;
    if (district) {
        const data = weatherData[district];
        const condition = data.condition.toLowerCase();
        let themeClass = 'sunny-theme';
        
        if (condition.includes('cloud')) themeClass = 'cloudy-theme';
        else if (condition.includes('rain')) themeClass = 'rainy-theme';
        
        document.body.classList.add(themeClass);
    }
    
    // Save preference
    localStorage.setItem('darkMode', 'false');
    
    showNotification('Light mode enabled', 'info');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    
    // Set notification styles based on type
    notification.className = 'fixed top-5 right-5 max-w-sm p-4 rounded-lg shadow-lg transform transition-all duration-500 scale-0 origin-top-right z-50';
    
    switch (type) {
        case 'success':
            notification.classList.add('bg-green-500', 'text-white');
            break;
        case 'error':
            notification.classList.add('bg-red-500', 'text-white');
            break;
        case 'warning':
            notification.classList.add('bg-yellow-500', 'text-white');
            break;
        default:
            notification.classList.add('bg-blue-500', 'text-white');
    }
    
    // Set notification message
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'} mr-2"></i>
            <div>${message}</div>
        </div>
    `;
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('scale-100');
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('scale-100');
            notification.classList.add('scale-0');
        }, 3000);
    }, 100);
}

function showDistrictInfo(district) {
    const districtInfo = weatherData[district];
    if (!districtInfo) return;

    const modal = document.getElementById('modal');
    const districtImage = document.getElementById('district-image');
    const description = document.getElementById('district-description');
    const stats = document.getElementById('district-stats');

    // Set district image
    districtImage.style.backgroundImage = `url('${districtInfo.districtImage}')`;
    districtImage.setAttribute('data-district', district);
    
    // Show description and stats
    description.textContent = districtInfo.description;
    stats.innerHTML = `
        <div class="bg-gray-100 p-3 rounded-lg">
            <div class="text-sm text-gray-600">Population</div>
            <div class="font-medium">${districtInfo.districtStats.population.toLocaleString()}</div>
        </div>
        <div class="bg-gray-100 p-3 rounded-lg">
            <div class="text-sm text-gray-600">Area</div>
            <div class="font-medium">${districtInfo.districtStats.area} km²</div>
        </div>
        <div class="bg-gray-100 p-3 rounded-lg">
            <div class="text-sm text-gray-600">Literacy Rate</div>
            <div class="font-medium">${districtInfo.districtStats.literacy}%</div>
        </div>
        <div class="bg-gray-100 p-3 rounded-lg">
            <div class="text-sm text-gray-600">Population Density</div>
            <div class="font-medium">${districtInfo.districtStats.density}/km²</div>
        </div>
    `;

    modal.classList.remove('hidden');
}