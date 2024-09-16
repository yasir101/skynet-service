import { Test, TestingModule } from '@nestjs/testing';
import { InternetPackageService } from './internet-package.service';

describe('InternetPackageService', () => {
  let service: InternetPackageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternetPackageService],
    }).compile();

    service = module.get<InternetPackageService>(InternetPackageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
