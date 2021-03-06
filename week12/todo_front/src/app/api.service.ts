import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://localhost:8000/api";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  createTaskList(token: string, name: string): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      })
    };
    return this.http.post(this.baseurl + "/new_task_list/", JSON.stringify(name), httpOptions);
  }

  createTask(token: string, name: string, created_at: string, due_on: string, status: string, task_list_id: number): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      })
    };
    // console.log(task_list_id);
    return this.http.post(this.baseurl + "/new_task/", JSON.stringify([name, created_at, due_on, status, task_list_id]), httpOptions);
  }

  getAllTaskLists(token: string): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      })
    };
    return this.http.get(this.baseurl + "/task_lists", httpOptions);
  }

  getTaskList(id: string): Observable<any>{
    return this.http.get(this.baseurl + "/task_lists/" + id);
  }

  getTasks(id: string): Observable<any>{
    return this.http.get(this.baseurl + "/task_lists/" + id + "/tasks");
  }

  getTaskInfo(task_list_id: string, task_id: string): Observable<any>{
    return this.http.get(this.baseurl + "/task_lists/" + task_list_id + "/tasks/" + task_id);
  }

  deleteTaskList(token: string, task_list_id: number): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      })
    };
    return this.http.delete(this.baseurl + "/task_list/" + task_list_id, httpOptions);
  }

  deleteTask(task_list_id: string, task_id: number): Observable<any>{
    return this.http.delete(this.baseurl + "/task_lists/" + task_list_id + "/tasks/" + task_id);
  }

  logUser(user): Observable<any> {
    return this.http.post(this.baseurl + "/login", JSON.stringify(user), { headers: this.httpHeaders });
  }
}