'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchVehicles } from '../api/fetchVehicles';

function FilterSection() {
    const currentYear = new Date().getFullYear();
    const [filters, setFilters] = useState({
        makeId: '',
        modelYear: '',
    });

    const [vehicleMakes, setVehicleMakes] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        async function fetchAsync() {
            const data = await fetchVehicles();

            setVehicleMakes(data);
        }

        fetchAsync();
    }, []);

    return (
        <>
            <div className="flex flex-wrap gap-4 items-end">
                {/* Vehicle Make Filter */}
                <div className="flex-1 min-w-[150px]">
                    <label
                        htmlFor="makeId"
                        className="block text-white font-medium mb-2"
                    >
                        Vehicle Make
                    </label>
                    <select
                        id="makeId"
                        name="makeId"
                        value={filters.makeId}
                        onChange={handleChange}
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 h-9  text-black"
                    >
                        <option value="">Select a make</option>
                        {vehicleMakes.map((make) => (
                            <option key={make?.id} value={make?.id}>
                                {make?.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Model Year Filter */}
                <div className="flex-1 min-w-[150px]">
                    <label
                        htmlFor="modelYear"
                        className="block text-white font-medium mb-2"
                    >
                        Model Year
                    </label>
                    <select
                        id="modelYear"
                        name="modelYear"
                        value={filters.modelYear}
                        onChange={handleChange}
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500  h-9 text-black"
                    >
                        <option value="">Select a year</option>
                        {Array.from(
                            { length: currentYear - 2015 + 1 },
                            (_, i) => 2015 + i
                        ).map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Apply Filters Button */}
                <div className="flex items-end">
                    <Link
                        href={
                            !filters?.makeId || !filters.modelYear
                                ? '#'
                                : `/result/${filters.makeId}/${filters.modelYear}`
                        }
                        className={`p-2 bg-blue-500 text-white rounded ${
                            !filters.makeId || !filters.modelYear
                                ? 'opacity-50 cursor-not-allowed'
                                : ''
                        }`}
                    >
                        Next
                    </Link>
                </div>
            </div>
        </>
    );
}

export default FilterSection;
