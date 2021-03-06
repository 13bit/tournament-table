import {Component} from '@angular/core';
import {remote, ipcRenderer} from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    const menu = remote.Menu.buildFromTemplate([
      {
        label: 'File',
        submenu: [
          {
            label: 'Открыть таблицу',
            click: () => {
              ipcRenderer.send('openTournamentTable');
            }
          },
          {
            label: 'Закрыть',
            click: () => {
              ipcRenderer.send('quit');
            }
          }
        ]
      },
      {
        label: 'Таблица',
        submenu: [
          {
            label: 'Перейти в полноэкранный режим',
            click: () => {
              ipcRenderer.send('tournamentTableFullScreen');
            }
          }
        ]
      }
    ]);
    remote.Menu.setApplicationMenu(menu);
  }
}
