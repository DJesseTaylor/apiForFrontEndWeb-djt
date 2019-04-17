import { Controller, Get, Post, Body, HttpService, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { DeveloperRequest } from './DeveloperRequest';
import { DeveloperResponse } from './DeveloperResponse';
import * as cuid from 'cuid';

@Controller('developers')
export class DevelopersController {

    database: Developers[] = [
        { id: cuid(), firstName: 'Jesse', lastName: 'Taylor', team: 'Monolith' },
        { id: cuid(), firstName: 'Kent', lastName: 'Bechtel', team: 'Monolith' },
        { id: cuid(), firstName: 'Zac', lastName: 'Adams', team: 'Tester' },
    ];

    @Get()
    async getDevelopers() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ data: this.database });
            }, 0);
        });
    }

    @Post()
    async addDeveloper(@Body() dev: DeveloperRequest, @Res() res: Response) {
        if (dev.firstName === 'Darth') {
            res.status(HttpStatus.BAD_REQUEST).send();
        } else {
            const newId = cuid();
            const response = new DeveloperResponse();
            response.id = newId;
            response.firstName = dev.firstName;
            response.lastName = dev.lastName;
            response.team = dev.team;
            this.database.push(response);
            res.status(HttpStatus.CREATED).send(response);
        }
    }
}

interface Developers {
    id: string;
    firstName: string;
    lastName: string;
    team: string;
}
