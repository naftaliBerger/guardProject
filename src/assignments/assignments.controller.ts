import { Controller ,Get, Post } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';

@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  //ניסיון
  @Get('all')
  getAssignments()  {
    return this.assignmentsService.getAllAssignments();
  }

}

