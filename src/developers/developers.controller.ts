import { Controller, Get } from '@nestjs/common';

@Controller('developers')
export class DevelopersController {

    database: Developers[] = [
        { id: '1', firstName: 'Jesse', lastName: 'Taylor', team: 'Monolith' },
        { id: '2', firstName: 'Kent', lastName: 'Bechtel', team: 'Monolith' },
        { id: '3', firstName: 'Zac', lastName: 'Adams', team: 'Tester' },
    ];

    @Get()
    async getDevelopers() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ data: this.database });
            }, 3000);
        });
    }
}

interface Developers {
    id: string;
    firstName: string;
    lastName: string;
    team: string;
}
