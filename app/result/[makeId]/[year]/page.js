import ResultsPageLists from './ResultsPageLists';

import { fetchVehiclesWithYear } from '@/app/api/fetchVehicles';

export default async function ResultsPage({ params }) {
    const { makeId, year } = await params;

    const vehicles = await fetchVehiclesWithYear({
        makeId,
        year,
    });

    return <ResultsPageLists vehicles={vehicles} params={params} />;
}
