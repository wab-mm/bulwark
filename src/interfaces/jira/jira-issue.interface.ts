import { JiraProject } from './jira-project.interface';
import { JiraPriority } from './jira-issue-priority.interface';
import { JiraUser } from './jira-user.interface';
import { IssueType } from './jira-issue-type.interface';
import { IssueStatus } from './jira-issue-status.interface';
import { Resolution } from './jira-resolution.interface';
import { SecurityLevel } from './jira-security-level.interface';
import { Version } from './jira-version.interface';
import { Component } from './jira-component.interface';
import { Attachment } from './jira-attachment.interface';
import { IssueLink } from './jira-issue-link.interface';
export interface JiraIssue {
  update?: object;
  fields: {
    id?: number;
    key?: string;
    summary?: string;
    parent?: {
      key: string;
    };
    subtasks?: JiraIssue[];
    description?: any;
    environment?: string;
    project?: JiraProject;
    priority?: JiraPriority;
    assignee?: JiraUser;
    reporter?: JiraUser;
    creator?: JiraUser;
    issuetype?: IssueType;
    issueStatus?: IssueStatus;
    created?: Date;
    updated?: Date;
    dueDate?: Date;
    resolution?: Resolution;
    originalEstimate?: number;
    remainingEstimate?: number;
    timeSpent?: number;
    securityLevel?: SecurityLevel;
    labels?: string[];
    versions?: Version[];
    fixVersions?: Version[];
    components?: Component[];
    comments?: Comment[];
    attachments?: Attachment[];
    links?: IssueLink[];
    properties?: any;
  };
}
