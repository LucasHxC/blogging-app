import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NewPostPage } from './new-post.page';

describe('NewPostPage', () => {
  let component: NewPostPage;
  let fixture: ComponentFixture<NewPostPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
