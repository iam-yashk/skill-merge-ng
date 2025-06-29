import { Component } from '@angular/core';
import { Team } from 'src/app/shared/models/team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss']
})
export class TeamsPage {
  teams: Team[] = [
    {
      id: 1,
      name: 'Frontend Team',
      description: 'Handles the UI and user experience',
      createdAt: '2024-01-01',
      memberCount: 5
    },
    {
      id: 2,
      name: 'Backend Team',
      description: 'Responsible for APIs and data',
      createdAt: '2024-01-02',
      memberCount: 3
    },
    {
      id: 3,
      name: 'Design Team',
      description: 'Designs user interfaces and graphics',
      createdAt: '2024-01-03',
      memberCount: 2
    }
  ];

  showModal = false;
  isEditMode = false;
  editingTeamId: number | null = null;

  newTeam: Partial<Team> = {
    name: '',
    description: ''
  };

  openModal() {
    this.isEditMode = false;
    this.editingTeamId = null;
    this.newTeam = { name: '', description: '' };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.newTeam = { name: '', description: '' };
    this.editingTeamId = null;
  }

  editTeam(team: Team) {
    this.newTeam = { ...team }; // pre-fill form
    this.isEditMode = true;
    this.editingTeamId = team.id;
    this.showModal = true;
  }

  submitTeam() {
    if (!this.newTeam.name?.trim()) return;

    if (this.isEditMode && this.editingTeamId !== null) {
      const index = this.teams.findIndex(t => t.id === this.editingTeamId);
      if (index !== -1) {
        this.teams[index] = {
          ...this.teams[index],
          name: this.newTeam.name!,
          description: this.newTeam.description || ''
        };
      }
    } else {
      const newEntry: Team = {
        id: this.teams.length + 1,
        name: this.newTeam.name!,
        description: this.newTeam.description || '',
        createdAt: new Date().toISOString().split('T')[0],
        memberCount: 0
      };
      this.teams.push(newEntry);
    }

    this.closeModal();
  }
}