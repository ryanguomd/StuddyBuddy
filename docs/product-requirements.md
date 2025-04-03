# StudySync: Product Requirements

## 1. Overview
StudyBuddy is a collaborative platform for students to create and manage study groups. This document outlines the key features and acceptance criteria of the MVP.

---

## 2. Features & Requirements

### 2.1 Group Creation & Management
- **Requirement**: Users can create private or public study groups and invite peers.
- **Acceptance Criteria**:
  - Users can input a group name, description, and privacy setting.
  - Group admins can invite members via email or a shareable link.

### 2.2 Shared Notes
- **Requirement**: Group members can upload documents, links, or typed notes.
- **Acceptance Criteria**:
  - Members can view, edit, or comment on shared notes.
  - Any updates to a note reflect in real-time for all members.

### 2.3 Task Lists & Deadlines
- **Requirement**: Users can create tasks with deadlines and assign them to group members.
- **Acceptance Criteria**:
  - Each task has a title, description, and due date.
  - Task ownership can be updated or reassigned.
  - Visual indicators for overdue tasks.

### 2.4 Notifications (Future Feature)
- **Requirement**: Email and in-app notifications for new uploads or upcoming deadlines.
- **Acceptance Criteria**:
  - Users can opt-in or opt-out of specific notifications.
  - Notifications include relevant task or note details.

---

## 3. Technical Considerations
- **Performance**: Quick response times for group-based CRUD operations (under 200ms).
- **Scalability**: Must handle multiple groups concurrently and large file uploads.
- **Security**: Basic authentication for group members to prevent unauthorized access.

---
